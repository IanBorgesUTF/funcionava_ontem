import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Search, Edit3, Trash2, Plus, Save, RefreshCw } from "lucide-react";
import "./style.css";
import Pagination from "../../components/Pagination";

export default function Voluntarios() {
  const { user } = useAuth();
  const { addToast } = useToast();
  const isAdmin = !!user?.admin;

  const [voluntarios, setVoluntarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    nome: "",
    email: "",
    admin: false,
  });
  const [createData, setCreateData] = useState({
    nome: "",
    email: "",
    senha: "",
    admin: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const headers = useMemo(
    () => (user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
    [user?.token]
  );

  const handleApiError = (error) => {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Não foi possível completar a ação.";
    addToast(message, "error");
  };

  const fetchVoluntarios = async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const { data } = await api.get("/voluntarios", { headers });
      setVoluntarios(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVoluntarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return voluntarios;
    return voluntarios.filter((v) =>
      `${v.nome} ${v.email} ${v.id}`.toLowerCase().includes(term)
    );
  }, [voluntarios, search]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  const startEdit = (vol) => {
    setEditId(vol.id);
    setEditData({
      nome: vol.nome || "",
      email: vol.email || "",
      admin: !!vol.admin,
    });
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditData({ nome: "", email: "", admin: false });
  };

  const handleUpdate = async (id) => {
    if (!editData.nome.trim() || !editData.email.trim()) {
      addToast("Nome e e-mail são obrigatórios.", "warning");
      return;
    }
    if (!isAdmin) {
      addToast("Ação permitida apenas para administradores.", "warning");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await api.put(
        `/voluntarios/${id}`,
        {
          nome: editData.nome.trim(),
          email: editData.email.trim(),
          admin: !!editData.admin,
        },
        { headers }
      );
      setVoluntarios((prev) => prev.map((v) => (v.id === id ? data : v)));
      addToast("Voluntário atualizado.", "success");
      cancelEdit();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja excluir este voluntário?")) return;
    if (!isAdmin) {
      addToast("Ação permitida apenas para administradores.", "warning");
      return;
    }
    setSubmitting(true);
    try {
      await api.delete(`/voluntarios/${id}`, { headers });
      setVoluntarios((prev) => prev.filter((v) => v.id !== id));
      addToast("Voluntário removido.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCreate = async () => {
    if (
      !createData.nome.trim() ||
      !createData.email.trim() ||
      !createData.senha.trim()
    ) {
      addToast("Nome, e-mail e senha são obrigatórios.", "warning");
      return;
    }
    if (!isAdmin) {
      addToast("Ação permitida apenas para administradores.", "warning");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await api.post(
        "/voluntarios",
        {
          nome: createData.nome.trim(),
          email: createData.email.trim(),
          senha: createData.senha,
          admin: !!createData.admin,
        },
        { headers }
      );
      setVoluntarios((prev) => [...prev, data]);
      setCreateData({ nome: "", email: "", senha: "", admin: false });
      addToast("Voluntário criado.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="voluntarios-page basetext-inter">
        <div className="voluntarios-header">
          <div>
            <h1 className="destaque-archivo-black">Voluntários</h1>
            <p>Gerencie o cadastro e permissões</p>
          </div>
          <button
            className="ghost-button"
            onClick={fetchVoluntarios}
            disabled={loading}
          >
            <RefreshCw size={16} />
          </button>
        </div>

        <section className="endpoint-card">
          <div className="list-actions">
            <div className="search-input">
              <Search size={16} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por nome ou e-mail"
              />
            </div>
          </div>

          {isAdmin && (
            <div className="create-card">
              <h3>Novo voluntário</h3>
              <div className="form-grid">
                <label className="form-label">
                  Nome
                  <input
                    type="text"
                    value={createData.nome}
                    onChange={(e) =>
                      setCreateData((f) => ({ ...f, nome: e.target.value }))
                    }
                    placeholder="Nome completo"
                  />
                </label>
                <label className="form-label">
                  E-mail
                  <input
                    type="email"
                    value={createData.email}
                    onChange={(e) =>
                      setCreateData((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="email@exemplo.com"
                  />
                </label>
                <label className="form-label">
                  Senha
                  <input
                    type="password"
                    value={createData.senha}
                    onChange={(e) =>
                      setCreateData((f) => ({ ...f, senha: e.target.value }))
                    }
                    placeholder="********"
                  />
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={createData.admin}
                    onChange={(e) =>
                      setCreateData((f) => ({ ...f, admin: e.target.checked }))
                    }
                  />
                  Administrador
                </label>
              </div>
              <button
                className="primary-button add-button"
                onClick={handleCreate}
                disabled={submitting}
              >
                <Plus size={16} /> Criar voluntário
              </button>
            </div>
          )}

          <div className="list-block">
            {loading ? (
              <p>Carregando voluntários...</p>
            ) : filtered.length === 0 ? (
              <p>Nenhum voluntário encontrado.</p>
            ) : (
              <table className="voluntarios-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Admin</th>
                    {isAdmin && <th>Ações</th>}
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((v) => (
                    <tr key={v.id}>
                      <td>{v.id}</td>
                      <td>
                        {editId === v.id ? (
                          <input
                            value={editData.nome}
                            onChange={(e) =>
                              setEditData((f) => ({
                                ...f,
                                nome: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          v.nome
                        )}
                      </td>
                      <td>
                        {editId === v.id ? (
                          <input
                            value={editData.email}
                            onChange={(e) =>
                              setEditData((f) => ({
                                ...f,
                                email: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          v.email
                        )}
                      </td>
                      <td>
                        {editId === v.id ? (
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              checked={editData.admin}
                              onChange={(e) =>
                                setEditData((f) => ({
                                  ...f,
                                  admin: e.target.checked,
                                }))
                              }
                            />
                            Admin
                          </label>
                        ) : v.admin ? (
                          "Sim"
                        ) : (
                          "Não"
                        )}
                      </td>
                      {isAdmin && (
                        <td className="actions">
                          {editId === v.id ? (
                            <>
                              <button
                                className="primary-button"
                                onClick={() => handleUpdate(v.id)}
                                disabled={submitting}
                              >
                                Salvar
                              </button>
                              <button
                                className="ghost-button"
                                onClick={cancelEdit}
                              >
                                Cancelar
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="icon-button"
                                title="Editar"
                                onClick={() => startEdit(v)}
                                disabled={submitting}
                              >
                                <Edit3 size={16} />
                              </button>
                              <button
                                className="icon-button danger"
                                title="Excluir"
                                onClick={() => handleDelete(v.id)}
                                disabled={submitting}
                              >
                                <Trash2 size={16} />
                              </button>
                            </>
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <Pagination
            page={page}
            totalItems={filtered.length}
            perPage={PER_PAGE}
            onChange={setPage}
          />
        </section>
      </div>
    </Layout>
  );
}
