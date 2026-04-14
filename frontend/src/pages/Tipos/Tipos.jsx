import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import "./style.css";
import { Plus, Search, Edit3, Trash2, X, RefreshCw } from "lucide-react";

export default function Tipos() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [tipos, setTipos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createDescricao, setCreateDescricao] = useState("");
  const [editId, setEditId] = useState(null);
  const [editDescricao, setEditDescricao] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tamanhos, setTamanhos] = useState([]);
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

  const fetchTipos = async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const [tiposRes, tamanhosRes] = await Promise.all([
        api.get("/item/tipos", { headers }),
        api.get("/item/tamanhos", { headers }),
      ]);
      setTipos(tiposRes.data);
      setTamanhos(tamanhosRes.data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTipos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  const handleCreate = async (event) => {
    event.preventDefault();
    if (!createDescricao.trim()) {
      addToast("Informe a descrição do tipo.", "warning");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await api.post(
        "/item/tipos",
        { descricao: createDescricao.trim() },
        { headers }
      );
      setTipos((prev) => [...prev, data]);
      setCreateDescricao("");
      setShowModal(false);
      addToast("Tipo criado com sucesso.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const startEdit = (tipo) => {
    setEditId(tipo.id);
    setEditDescricao(tipo.descricao);
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
        `/item/tipos/${id}`,
        { descricao: editDescricao.trim() },
        { headers }
      );
      setTipos((prev) => prev.map((t) => (t.id === id ? data : t)));
      addToast("Tipo atualizado com sucesso.", "success");
      cancelEdit();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Deseja realmente remover este tipo? Esta ação não pode ser desfeita."
    );
    if (!confirmDelete) return;
    setSubmitting(true);
    try {
      await api.delete(`/item/tipos/${id}`, { headers });
      setTipos((prev) => prev.filter((t) => t.id !== id));
      addToast("Tipo removido.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const filteredTipos = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return tipos;
    return tipos.filter((tipo) => tipo.descricao.toLowerCase().includes(term));
  }, [tipos, searchTerm]);

  const paginatedTipos = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filteredTipos.slice(start, start + PER_PAGE);
  }, [filteredTipos, page]);

  return (
    <Layout>
      <div className="tipos-page basetext-inter">
        <div className="tipos-header">
          <div>
            <h1 className="destaque-archivo-black">Tipos</h1>
            <p>Gestão de tipos de itens</p>
          </div>
          <button
            className="ghost-button icon-only"
            onClick={fetchTipos}
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
              Novo tipo
            </button>
          </div>
          <div className="list-block">
            {loading ? (
              <p>Carregando tipos...</p>
            ) : filteredTipos.length === 0 ? (
              <p>Nenhum tipo cadastrado.</p>
            ) : (
              <table className="tipos-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Descrição</th>
                    <th className="wide-col">Tamanhos</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTipos.map((tipo) => (
                    <tr key={tipo.id}>
                      <td>{tipo.id}</td>
                      <td>
                        {editId === tipo.id ? (
                          <input
                            value={editDescricao}
                            onChange={(e) => setEditDescricao(e.target.value)}
                            placeholder="Descrição"
                          />
                        ) : (
                          tipo.descricao
                        )}
                      </td>
                      <td>
                        <div className="tipo-tags">
                          {tamanhos
                            .filter((t) => t.tipoId === tipo.id)
                            .map((t) => (
                              <span key={t.id} className="tag-pill">
                                {t.descricao}
                              </span>
                            ))}
                        </div>
                      </td>
                      <td className="actions">
                        {editId === tipo.id ? (
                          <>
                            <button
                              className="secondary-button"
                              onClick={() => handleUpdate(tipo.id)}
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
                              onClick={() => startEdit(tipo)}
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              className="icon-button danger"
                              title="Excluir"
                              onClick={() => handleDelete(tipo.id)}
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
        </section>
        <Pagination
          page={page}
          totalItems={filteredTipos.length}
          perPage={PER_PAGE}
          onChange={setPage}
        />
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
                <h3 className="destaque-archivo-black">Novo tipo</h3>
                <p className="basetext-inter">Crie um novo tipo de item</p>
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
                  placeholder="Ex.: Camiseta"
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
                  {submitting ? "Enviando..." : "Criar tipo"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
