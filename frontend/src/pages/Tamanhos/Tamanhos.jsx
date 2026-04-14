import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Plus, Search, Edit3, Trash2, RefreshCw } from "lucide-react";
import "./style.css";

export default function Tamanhos() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [tamanhos, setTamanhos] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createDescricaoByTipo, setCreateDescricaoByTipo] = useState({});
  const [editId, setEditId] = useState(null);
  const [editDescricao, setEditDescricao] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 8;

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

  const fetchData = async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const [tamanhosRes, tiposRes] = await Promise.all([
        api.get("/item/tamanhos", { headers }),
        api.get("/item/tipos", { headers }),
      ]);
      setTamanhos(tamanhosRes.data);
      setTipos(tiposRes.data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  const handleCreate = async (tipoId) => {
    const desc = (createDescricaoByTipo[tipoId] || "").trim();
    if (!desc) {
      addToast("Informe a descrição do tamanho.", "warning");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await api.post(
        "/item/tamanhos",
        { descricao: desc, tipoId },
        { headers }
      );
      setTamanhos((prev) => [...prev, data]);
      setCreateDescricaoByTipo((prev) => ({ ...prev, [tipoId]: "" }));
      addToast("Tamanho criado com sucesso.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const startEdit = (tamanho) => {
    setEditId(tamanho.id);
    setEditDescricao(tamanho.descricao);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditDescricao("");
  };

  const handleUpdate = async (id) => {
    if (!editDescricao.trim()) {
      addToast("Informe a nova descrição.", "warning");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await api.put(
        `/item/tamanhos/${id}`,
        { descricao: editDescricao.trim() },
        { headers }
      );
      setTamanhos((prev) => prev.map((t) => (t.id === id ? data : t)));
      addToast("Tamanho atualizado com sucesso.", "success");
      cancelEdit();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Deseja realmente remover este tamanho? Esta ação não pode ser desfeita."
    );
    if (!confirmDelete) return;
    setSubmitting(true);
    try {
      await api.delete(`/item/tamanhos/${id}`, { headers });
      setTamanhos((prev) => prev.filter((t) => t.id !== id));
      addToast("Tamanho removido.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const tiposFiltrados = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return tipos;
    return tipos.filter((t) => t.descricao.toLowerCase().includes(term));
  }, [tipos, searchTerm]);

  const paginatedTipos = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return tiposFiltrados.slice(start, start + PER_PAGE);
  }, [tiposFiltrados, page]);

  return (
    <Layout>
      <div className="tamanhos-page basetext-inter">
        <div className="tipos-header">
          <div>
            <h1 className="destaque-archivo-black">Tamanhos</h1>
            <p>Cadastre vários tamanhos para cada tipo</p>
          </div>
          <button
            className="ghost-button icon-only"
            onClick={fetchData}
            disabled={loading}
            title="Recarregar"
          >
            <RefreshCw size={16} />
          </button>
        </div>

        <section className="endpoint-card get-card">
          <div className="list-actions">
            <div className="search-input">
              <Search size={16} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por tipo"
              />
            </div>
          </div>

          {loading ? (
            <p>Carregando tipos e tamanhos...</p>
          ) : tiposFiltrados.length === 0 ? (
            <p>Nenhum tipo encontrado.</p>
          ) : (
            <div className="tipo-cards">
              {paginatedTipos.map((tipo) => {
                const tamanhosDoTipo = tamanhos.filter(
                  (t) => t.tipoId === tipo.id
                );
                return (
                  <div key={tipo.id} className="tipo-card">
                    <div className="tipo-card-header">
                      <div>
                        <h3>{tipo.descricao}</h3>
                        <p className="muted">ID: {tipo.id}</p>
                      </div>
                      <div className="add-row">
                        <input
                          type="text"
                          className="add-input"
                          placeholder="Novo tamanho para este tipo"
                          value={createDescricaoByTipo[tipo.id] || ""}
                          onChange={(e) =>
                            setCreateDescricaoByTipo((prev) => ({
                              ...prev,
                              [tipo.id]: e.target.value,
                            }))
                          }
                        />
                        <button
                          type="button"
                          className="primary-button add-button"
                          onClick={() => handleCreate(tipo.id)}
                          disabled={submitting}
                        >
                          <Plus size={16} /> Adicionar
                        </button>
                      </div>
                    </div>

                    {tamanhosDoTipo.length === 0 ? (
                      <p className="muted">Nenhum tamanho para este tipo.</p>
                    ) : (
                      <table className="tipos-table inner">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tamanhosDoTipo.map((tamanho) => (
                            <tr key={tamanho.id}>
                              <td>{tamanho.id}</td>
                              <td>
                                {editId === tamanho.id ? (
                                  <input
                                    value={editDescricao}
                                    onChange={(e) =>
                                      setEditDescricao(e.target.value)
                                    }
                                    placeholder="Descrição"
                                  />
                                ) : (
                                  tamanho.descricao
                                )}
                              </td>
                              <td className="actions">
                                {editId === tamanho.id ? (
                                  <>
                                    <button
                                      className="secondary-button"
                                      onClick={() => handleUpdate(tamanho.id)}
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
                                      onClick={() => startEdit(tamanho)}
                                    >
                                      <Edit3 size={16} />
                                    </button>
                                    <button
                                      className="icon-button danger"
                                      title="Excluir"
                                      onClick={() => handleDelete(tamanho.id)}
                                      disabled={submitting}
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
        <Pagination
          page={page}
          totalItems={tiposFiltrados.length}
          perPage={PER_PAGE}
          onChange={setPage}
        />
      </div>
    </Layout>
  );
}
