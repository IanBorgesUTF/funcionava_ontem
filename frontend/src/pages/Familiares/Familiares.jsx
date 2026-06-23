import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Search, Edit3, Trash2, Plus, RefreshCw } from "lucide-react";
import "./style.css";
import Pagination from "../../components/Pagination";

const formatPhone = (value) => {
  const digits = (value || "").replace(/\D/g, "");
  if (!digits) return "-";
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
      .trim()
      .replace(/[- ]$/, "");
  }
  return digits
    .replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
    .trim()
    .replace(/[- ]$/, "");
};

const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "-";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function Familiares() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [familiares, setFamiliares] = useState([]);
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    nome: "",
    parentesco: "",
    telefone: "",
    dataNascimento: "",
    beneficiarioId: "",
  });
  const [createData, setCreateData] = useState({
    nome: "",
    parentesco: "",
    telefone: "",
    dataNascimento: "",
    beneficiarioId: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const headers = useMemo(
    () => (user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
    [user?.token]
  );

  const handleApiError = (error) => {
    const valida = error?.response?.data?.["Erro de Validação"];
    const message =
      (Array.isArray(valida) && valida.map((v) => v.message).join(" | ")) ||
      error?.response?.data?.message ||
      error?.message ||
      "Não foi possível completar a ação.";
    addToast(message, "error");
  };

  const fetchFamiliares = async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const [famRes, benRes] = await Promise.all([
        api.get("/familiares", { headers }),
        api.get("/beneficiarios", { headers }),
      ]);
      setFamiliares(famRes.data);
      setBeneficiarios(benRes.data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFamiliares();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return familiares;
    return familiares.filter((f) =>
      `${f.nome} ${f.parentesco} ${f.telefone} ${f.beneficiario?.nome || ""}`
        .toLowerCase()
        .includes(term)
    );
  }, [familiares, search]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  const startEdit = (f) => {
    setEditId(f.id);
    setEditData({
      nome: f.nome || "",
      parentesco: f.parentesco || "",
      telefone: f.telefone || "",
      dataNascimento: f.dataNascimento ? f.dataNascimento.split("T")[0] : "",
      beneficiarioId: f.beneficiarioId || "",
    });
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditData({
      nome: "",
      parentesco: "",
      telefone: "",
      dataNascimento: "",
      beneficiarioId: "",
    });
  };

  const handleUpdate = async (id) => {
    if (!editData.nome.trim() || !editData.parentesco.trim()) {
      addToast("Nome e parentesco são obrigatórios.", "warning");
      return;
    }
    if (!editData.beneficiarioId) {
      addToast("Selecione um beneficiário.", "warning");
      return;
    }
    const telefoneLimpo = editData.telefone
      ? editData.telefone.replace(/\D/g, "")
      : "";
    setSubmitting(true);
    try {
      const { data } = await api.put(
        `/familiares/${id}`,
        {
          nome: editData.nome.trim(),
          parentesco: editData.parentesco.trim(),
          telefone: telefoneLimpo || null,
          dataNascimento: editData.dataNascimento || null,
          beneficiarioId: Number(editData.beneficiarioId),
        },
        { headers }
      );
      setFamiliares((prev) =>
        prev.map((f) =>
          f.id === id
            ? { ...data, beneficiario: beneficiarios.find((b) => b.id === data.beneficiarioId) }
            : f
        )
      );
      addToast("Familiar atualizado.", "success");
      cancelEdit();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja excluir este familiar?")) return;
    setSubmitting(true);
    try {
      await api.delete(`/familiares/${id}`, { headers });
      setFamiliares((prev) => prev.filter((f) => f.id !== id));
      addToast("Familiar removido.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCreate = async () => {
    if (!createData.nome.trim() || !createData.parentesco.trim()) {
      addToast("Nome e parentesco são obrigatórios.", "warning");
      return;
    }
    if (!createData.beneficiarioId) {
      addToast("Selecione um beneficiário.", "warning");
      return;
    }
    const telefoneLimpo = createData.telefone
      ? createData.telefone.replace(/\D/g, "")
      : "";
    setSubmitting(true);
    try {
      const { data } = await api.post(
        "/familiares",
        {
          nome: createData.nome.trim(),
          parentesco: createData.parentesco.trim(),
          telefone: telefoneLimpo || null,
          dataNascimento: createData.dataNascimento || null,
          beneficiarioId: Number(createData.beneficiarioId),
        },
        { headers }
      );
      setFamiliares((prev) => [
        ...prev,
        { ...data, beneficiario: beneficiarios.find((b) => b.id === data.beneficiarioId) },
      ]);
      setCreateData({
        nome: "",
        parentesco: "",
        telefone: "",
        dataNascimento: "",
        beneficiarioId: "",
      });
      addToast("Familiar criado.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="fam-page basetext-inter">
        <div className="fam-header">
          <div>
            <h1 className="destaque-archivo-black">Familiares</h1>
            <p>Cadastre e gerencie familiares dos beneficiários</p>
          </div>
          <button
            className="ghost-button icon-only"
            onClick={fetchFamiliares}
            disabled={loading}
            title="Recarregar"
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
                placeholder="Buscar por nome, parentesco ou beneficiário"
              />
            </div>
          </div>

          <div className="create-card">
            <h3>Novo familiar</h3>
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
                Parentesco
                <select
                  value={createData.parentesco}
                  onChange={(e) =>
                    setCreateData((f) => ({ ...f, parentesco: e.target.value }))
                  }
                >
                  <option value="">Selecione...</option>
                  <option value="Cônjuge">Cônjuge</option>
                  <option value="Filho(a)">Filho(a)</option>
                  <option value="Pai">Pai</option>
                  <option value="Mãe">Mãe</option>
                  <option value="Irmão(ã)">Irmão(ã)</option>
                  <option value="Avó(ô)">Avó(ô)</option>
                  <option value="Tio(a)">Tio(a)</option>
                  <option value="Primo(a)">Primo(a)</option>
                  <option value="Outro">Outro</option>
                </select>
              </label>
              <label className="form-label">
                Telefone
                <input
                  type="text"
                  value={createData.telefone}
                  onChange={(e) =>
                    setCreateData((f) => ({ ...f, telefone: e.target.value }))
                  }
                  placeholder="(xx) xxxxx-xxxx"
                />
              </label>
              <label className="form-label">
                Data de nascimento
                <input
                  type="date"
                  value={createData.dataNascimento}
                  onChange={(e) =>
                    setCreateData((f) => ({
                      ...f,
                      dataNascimento: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="form-label">
                Beneficiário
                <select
                  value={createData.beneficiarioId}
                  onChange={(e) =>
                    setCreateData((f) => ({
                      ...f,
                      beneficiarioId: e.target.value,
                    }))
                  }
                >
                  <option value="">Selecione...</option>
                  {beneficiarios.length === 0 ? (
                    <option value="" disabled>
                      Nenhum beneficiário disponível
                    </option>
                  ) : (
                    beneficiarios.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.nome}
                      </option>
                    ))
                  )}
                </select>
              </label>
            </div>
            <button
              className="primary-button add-button"
              onClick={handleCreate}
              disabled={submitting}
            >
              <Plus size={16} /> Criar familiar
            </button>
          </div>

          <div className="list-block">
            {loading ? (
              <p>Carregando familiares...</p>
            ) : filtered.length === 0 ? (
              <p>Nenhum familiar encontrado.</p>
            ) : (
              <table className="fam-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Parentesco</th>
                    <th>Telefone</th>
                    <th>Data Nascimento</th>
                    <th>Beneficiário</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((f) => (
                    <tr key={f.id}>
                      <td>{f.id}</td>
                      <td>
                        {editId === f.id ? (
                          <input
                            value={editData.nome}
                            onChange={(e) =>
                              setEditData((d) => ({
                                ...d,
                                nome: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          f.nome
                        )}
                      </td>
                      <td>
                        {editId === f.id ? (
                          <select
                            value={editData.parentesco}
                            onChange={(e) =>
                              setEditData((d) => ({
                                ...d,
                                parentesco: e.target.value,
                              }))
                            }
                          >
                            <option value="">Selecione...</option>
                            <option value="Cônjuge">Cônjuge</option>
                            <option value="Filho(a)">Filho(a)</option>
                            <option value="Pai">Pai</option>
                            <option value="Mãe">Mãe</option>
                            <option value="Irmão(ã)">Irmão(ã)</option>
                            <option value="Avó(ô)">Avó(ô)</option>
                            <option value="Tio(a)">Tio(a)</option>
                            <option value="Primo(a)">Primo(a)</option>
                            <option value="Outro">Outro</option>
                          </select>
                        ) : (
                          f.parentesco
                        )}
                      </td>
                      <td>
                        {editId === f.id ? (
                          <input
                            value={editData.telefone}
                            onChange={(e) =>
                              setEditData((d) => ({
                                ...d,
                                telefone: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          formatPhone(f.telefone)
                        )}
                      </td>
                      <td>
                        {editId === f.id ? (
                          <input
                            type="date"
                            value={editData.dataNascimento}
                            onChange={(e) =>
                              setEditData((d) => ({
                                ...d,
                                dataNascimento: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          formatDate(f.dataNascimento)
                        )}
                      </td>
                      <td>{f.beneficiario?.nome || "-"}</td>
                      <td>
                        {editId === f.id ? (
                          <div className="action-buttons">
                            <button
                              className="save-button"
                              onClick={() => handleUpdate(f.id)}
                              disabled={submitting}
                            >
                              Salvar
                            </button>
                            <button
                              className="cancel-button"
                              onClick={cancelEdit}
                              disabled={submitting}
                            >
                              Cancelar
                            </button>
                          </div>
                        ) : (
                          <div className="action-buttons">
                            <button
                              className="icon-button"
                              onClick={() => startEdit(f)}
                              title="Editar"
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              className="icon-button danger"
                              onClick={() => handleDelete(f.id)}
                              title="Deletar"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {!loading && filtered.length > 0 && (
            <Pagination
              currentPage={page}
              totalItems={filtered.length}
              itemsPerPage={PER_PAGE}
              onPageChange={setPage}
            />
          )}
        </section>
      </div>
    </Layout>
  );
}
