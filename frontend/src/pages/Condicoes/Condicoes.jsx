import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Plus, Search, Edit3, Trash2, X, RefreshCw } from "lucide-react";
import "./style.css";

export default function Condicoes() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [condicoes, setCondicoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createDescricao, setCreateDescricao] = useState("");
  const [editId, setEditId] = useState(null);
  const [editDescricao, setEditDescricao] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
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

  const fetchCondicoes = async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const { data } = await api.get("/item/condicoes", { headers });
      setCondicoes(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCondicoes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  const handleCreate = async (event) => {
    event.preventDefault();
    if (!createDescricao.trim()) {
      addToast("Informe a descrição da condição.", "warning");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await api.post(
        "/item/condicoes",
        { descricao: createDescricao.trim() },
        { headers }
      );
      setCondicoes((prev) => [...prev, data]);
      setCreateDescricao("");
      setShowModal(false);
      addToast("Condição criada com sucesso.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const startEdit = (condicao) => {
    setEditId(condicao.id);
    setEditDescricao(condicao.descricao);
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
        `/item/condicoes/${id}`,
        { descricao: editDescricao.trim() },
        { headers }
      );
      setCondicoes((prev) => prev.map((c) => (c.id === id ? data : c)));
      addToast("Condição atualizada com sucesso.", "success");
      cancelEdit();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Deseja realmente remover esta condição? Esta ação não pode ser desfeita."
    );
    if (!confirmDelete) return;
    setSubmitting(true);
    try {
      await api.delete(`/item/condicoes/${id}`, { headers });
      setCondicoes((prev) => prev.filter((c) => c.id !== id));
      addToast("Condição removida.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return condicoes;
    return condicoes.filter((c) => c.descricao.toLowerCase().includes(term));
  }, [condicoes, searchTerm]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  return (
    <Layout>
      <div className="condicoes-page basetext-inter">
        <div className="tipos-header">
          <div>
            <h1 className="destaque-archivo-black">Condições</h1>
            <p>Gestão de condições de conservação</p>
          </div>
          <button
            className="ghost-button icon-only"
            onClick={fetchCondicoes}
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
                placeholder="Buscar por descrição"
              />
            </div>
            <button
              type="button"
              className="primary-button new-type-button"
              onClick={() => setShowModal(true)}
            >
              <Plus size={16} />
              Nova condição
            </button>
          </div>
          <div className="list-block">
            {loading ? (
              <p>Carregando condições...</p>
            ) : filtered.length === 0 ? (
              <p>Nenhuma condição cadastrada.</p>
            ) : (
              <table className="tipos-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((condicao) => (
                    <tr key={condicao.id}>
                      <td>{condicao.id}</td>
                      <td>
                        {editId === condicao.id ? (
                          <input
                            value={editDescricao}
                            onChange={(e) => setEditDescricao(e.target.value)}
                            placeholder="Descrição"
                          />
                        ) : (
                          condicao.descricao
                        )}
                      </td>
                      <td className="actions">
                        {editId === condicao.id ? (
                          <>
                            <button
                              className="secondary-button"
                              onClick={() => handleUpdate(condicao.id)}
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
                              onClick={() => startEdit(condicao)}
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              className="icon-button danger"
                              title="Excluir"
                              onClick={() => handleDelete(condicao.id)}
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

      {showModal && (
        <div
          className="modal-backdrop"
          onClick={() => {
            if (!submitting) setShowModal(false);
          }}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="destaque-archivo-black">Nova condição</h3>
                <p className="basetext-inter">Crie uma nova condição de item</p>
              </div>
              <button
                className="close-btn icon-only"
                type="button"
                onClick={() => setShowModal(false)}
                disabled={submitting}
                title="Fechar"
              >
                <X size={18} />
              </button>
            </div>
            <form className="endpoint-form" onSubmit={handleCreate}>
              <label className="basetext-inter">
                Descrição
                <input
                  type="text"
                  value={createDescricao}
                  onChange={(e) => setCreateDescricao(e.target.value)}
                  placeholder="Ex.: Novo, Usado, Danificado"
                />
              </label>
              <div className="modal-actions">
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => setShowModal(false)}
                  disabled={submitting}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="primary-button"
                  disabled={submitting}
                >
                  {submitting ? "Enviando..." : "Criar condição"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
