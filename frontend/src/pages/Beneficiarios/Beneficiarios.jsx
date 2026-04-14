import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Search, Edit3, Trash2, Plus, RefreshCw } from "lucide-react";
import "./style.css";
import Pagination from "../../components/Pagination";

const formatCpf = (value) => {
  const digits = (value || "").replace(/\D/g, "").slice(0, 11);
  if (digits.length !== 11) return value || "-";
  return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

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

export default function Beneficiarios() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [beneficiarios, setBeneficiarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    limiteItens: 0,
  });
  const [createData, setCreateData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    limiteItens: 0,
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

  const fetchBeneficiarios = async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const { data } = await api.get("/beneficiarios", { headers });
      setBeneficiarios(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBeneficiarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return beneficiarios;
    return beneficiarios.filter((b) =>
      `${b.nome} ${b.cpf} ${b.telefone} ${b.endereco}`
        .toLowerCase()
        .includes(term)
    );
  }, [beneficiarios, search]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  const startEdit = (b) => {
    setEditId(b.id);
    setEditData({
      nome: b.nome || "",
      cpf: b.cpf || "",
      telefone: b.telefone || "",
      endereco: b.endereco || "",
      limiteItens: b.limiteItens ?? 0,
    });
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditData({
      nome: "",
      cpf: "",
      telefone: "",
      endereco: "",
      limiteItens: 0,
    });
  };

  const handleUpdate = async (id) => {
    if (!editData.nome.trim() || !editData.cpf.trim()) {
      addToast("Nome e CPF são obrigatórios.", "warning");
      return;
    }
    const cpfLimpo = editData.cpf.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
      addToast("CPF deve ter 11 dígitos.", "warning");
      return;
    }
    const telefoneLimpo = editData.telefone
      ? editData.telefone.replace(/\D/g, "")
      : "";
    const limite = Number(editData.limiteItens);
    if (Number.isNaN(limite) || limite < 0) {
      addToast(
        "Limite deve ser zero (ilimitado) ou um número positivo.",
        "warning"
      );
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await api.put(
        `/beneficiarios/${id}`,
        {
          ...editData,
          nome: editData.nome.trim(),
          cpf: cpfLimpo,
          telefone: telefoneLimpo || null,
          limiteItens: limite,
        },
        { headers }
      );
      setBeneficiarios((prev) => prev.map((b) => (b.id === id ? data : b)));
      addToast("Beneficiário atualizado.", "success");
      cancelEdit();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja excluir este beneficiário?")) return;
    setSubmitting(true);
    try {
      await api.delete(`/beneficiarios/${id}`, { headers });
      setBeneficiarios((prev) => prev.filter((b) => b.id !== id));
      addToast("Beneficiário removido.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCreate = async () => {
    if (!createData.nome.trim() || !createData.cpf.trim()) {
      addToast("Nome e CPF são obrigatórios.", "warning");
      return;
    }
    const cpfLimpo = createData.cpf.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
      addToast("CPF deve ter 11 dígitos.", "warning");
      return;
    }
    const telefoneLimpo = createData.telefone
      ? createData.telefone.replace(/\D/g, "")
      : "";
    const limite = Number(createData.limiteItens);
    if (Number.isNaN(limite) || limite < 0) {
      addToast(
        "Limite deve ser zero (ilimitado) ou um número positivo.",
        "warning"
      );
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await api.post(
        "/beneficiarios",
        {
          ...createData,
          nome: createData.nome.trim(),
          cpf: cpfLimpo,
          telefone: telefoneLimpo || null,
          limiteItens: limite,
        },
        { headers }
      );
      setBeneficiarios((prev) => [...prev, data]);
      setCreateData({
        nome: "",
        cpf: "",
        telefone: "",
        endereco: "",
        limiteItens: 0,
      });
      addToast("Beneficiário criado.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="benef-page basetext-inter">
        <div className="benef-header">
          <div>
            <h1 className="destaque-archivo-black">Beneficiários</h1>
            <p>Cadastre e gerencie beneficiários</p>
          </div>
          <button
            className="ghost-button icon-only"
            onClick={fetchBeneficiarios}
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
                placeholder="Buscar por nome, CPF, telefone ou endereço"
              />
            </div>
          </div>

          <div className="create-card">
            <h3>Novo beneficiário</h3>
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
                CPF
                <input
                  type="text"
                  value={createData.cpf}
                  onChange={(e) =>
                    setCreateData((f) => ({ ...f, cpf: e.target.value }))
                  }
                  placeholder="Somente números"
                />
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
                Endereço
                <input
                  type="text"
                  value={createData.endereco}
                  onChange={(e) =>
                    setCreateData((f) => ({ ...f, endereco: e.target.value }))
                  }
                  placeholder="Rua, número, bairro, cidade"
                />
              </label>
              <label className="form-label">
                Limite de itens (0 = sem limite)
                <input
                  type="number"
                  min="0"
                  value={createData.limiteItens}
                  onChange={(e) =>
                    setCreateData((f) => ({
                      ...f,
                      limiteItens: e.target.value,
                    }))
                  }
                  placeholder="0"
                />
              </label>
            </div>
            <button
              className="primary-button add-button"
              onClick={handleCreate}
              disabled={submitting}
            >
              <Plus size={16} /> Criar beneficiário
            </button>
          </div>

          <div className="list-block">
            {loading ? (
              <p>Carregando beneficiários...</p>
            ) : filtered.length === 0 ? (
              <p>Nenhum beneficiário encontrado.</p>
            ) : (
              <table className="benef-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Limite</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((b) => (
                    <tr key={b.id}>
                      <td>{b.id}</td>
                      <td>
                        {editId === b.id ? (
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
                          b.nome
                        )}
                      </td>
                      <td>
                        {editId === b.id ? (
                          <input
                            value={editData.cpf}
                            onChange={(e) =>
                              setEditData((f) => ({
                                ...f,
                                cpf: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          formatCpf(b.cpf)
                        )}
                      </td>
                      <td>
                        {editId === b.id ? (
                          <input
                            value={editData.telefone ?? ""}
                            onChange={(e) =>
                              setEditData((f) => ({
                                ...f,
                                telefone: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          formatPhone(b.telefone)
                        )}
                      </td>
                      <td>
                        {editId === b.id ? (
                          <input
                            value={editData.endereco ?? ""}
                            onChange={(e) =>
                              setEditData((f) => ({
                                ...f,
                                endereco: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          b.endereco || "-"
                        )}
                      </td>
                      <td>
                        {editId === b.id ? (
                          <input
                            type="number"
                            min="0"
                            value={editData.limiteItens}
                            onChange={(e) =>
                              setEditData((f) => ({
                                ...f,
                                limiteItens: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          b.limiteItens ?? 0
                        )}
                      </td>
                      <td className="actions">
                        {editId === b.id ? (
                          <>
                            <button
                              className="primary-button"
                              onClick={() => handleUpdate(b.id)}
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
                              onClick={() => startEdit(b)}
                              disabled={submitting}
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              className="icon-button danger"
                              title="Excluir"
                              onClick={() => handleDelete(b.id)}
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
