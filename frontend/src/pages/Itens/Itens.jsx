import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Search, Edit3, RefreshCw } from "lucide-react";
import "./style.css";

export default function Itens() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [itens, setItens] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [tamanhos, setTamanhos] = useState([]);
  const [condicoes, setCondicoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("");
  const [selectedTamanho, setSelectedTamanho] = useState("");
  const [selectedCondicao, setSelectedCondicao] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editQuantidade, setEditQuantidade] = useState("");
  const [submitting, setSubmitting] = useState(false);
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

  const fetchFiltros = async () => {
    if (!user?.token) return;
    try {
      const [tiposRes, tamanhosRes, condicoesRes] = await Promise.all([
        api.get("/item/tipos", { headers }),
        api.get("/item/tamanhos", { headers }),
        api.get("/item/condicoes", { headers }),
      ]);
      setTipos(tiposRes.data);
      setTamanhos(tamanhosRes.data);
      setCondicoes(condicoesRes.data);
    } catch (error) {
      handleApiError(error);
    }
  };

  const fetchItens = async (params = {}) => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const { data } = await api.get("/itens", { headers, params });
      setItens(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiltros();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  useEffect(() => {
    if (!user?.token) return;

    const timeout = setTimeout(() => {
      fetchItens({
        q: searchTerm.trim() || undefined,
        tipoId: selectedTipo || undefined,
        tamanhoId: selectedTamanho || undefined,
        condicaoId: selectedCondicao || undefined,
      });
      setPage(1);
    }, 300);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token, searchTerm, selectedTipo, selectedTamanho, selectedCondicao]);

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditQuantidade(item.quantidadeEstoque ?? "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditQuantidade("");
  };

  const handleSave = async (id) => {
    if (editQuantidade === "" || Number.isNaN(Number(editQuantidade))) {
      addToast("Informe uma quantidade numérica.", "warning");
      return;
    }
    const quantidade = Number(editQuantidade);
    if (quantidade < 0) {
      addToast("Quantidade não pode ser negativa.", "warning");
      return;
    }

    setSubmitting(true);
    try {
      const { data } = await api.patch(
        `/itens/${id}/quantidade`,
        { quantidade },
        { headers }
      );
      setItens((prev) => prev.map((item) => (item.id === id ? data : item)));
      addToast("Quantidade atualizada.", "success");
      cancelEdit();
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const queryParams = useMemo(
    () => ({
      q: searchTerm.trim() || undefined,
      tipoId: selectedTipo || undefined,
      tamanhoId: selectedTamanho || undefined,
      condicaoId: selectedCondicao || undefined,
    }),
    [searchTerm, selectedTipo, selectedTamanho, selectedCondicao]
  );

  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return itens.slice(start, start + PER_PAGE);
  }, [itens, page]);

  return (
    <Layout>
      <div className="itens-page basetext-inter">
        <div className="itens-header">
          <div>
            <h1 className="destaque-archivo-black">Itens</h1>
            <p>Listagem e edição de quantidade em estoque</p>
          </div>
          <button
            className="ghost-button icon-only"
            onClick={() => fetchItens(queryParams)}
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
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1);
                }}
                placeholder="Buscar por tipo, tamanho, condição ou quantidade"
              />
            </div>
            <div className="filters-row">
              <div className="filter-select">
                <label>Tipo</label>
                <select
                  value={selectedTipo}
                  onChange={(e) => {
                    setSelectedTipo(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value="">Todos</option>
                  {tipos.map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.descricao}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-select">
                <label>Tamanho</label>
                <select
                  value={selectedTamanho}
                  onChange={(e) => {
                    setSelectedTamanho(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value="">Todos</option>
                  {tamanhos.map((tamanho) => (
                    <option key={tamanho.id} value={tamanho.id}>
                      {tamanho.descricao}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-select">
                <label>Condição</label>
                <select
                  value={selectedCondicao}
                  onChange={(e) => {
                    setSelectedCondicao(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value="">Todas</option>
                  {condicoes.map((condicao) => (
                    <option key={condicao.id} value={condicao.id}>
                      {condicao.descricao}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="list-block">
            {loading ? (
              <p>Carregando itens...</p>
            ) : itens.length === 0 ? (
              <p>Nenhum item encontrado.</p>
            ) : (
              <table className="itens-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Tamanho</th>
                    <th>Condição</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.tipo?.descricao || "-"}</td>
                      <td>{item.tamanho?.descricao || "-"}</td>
                      <td>{item.condicao?.descricao || "-"}</td>
                      <td>
                        {editingId === item.id ? (
                          <input
                            type="number"
                            value={editQuantidade}
                            min="0"
                            onChange={(e) => setEditQuantidade(e.target.value)}
                          />
                        ) : (
                          item.quantidadeEstoque
                        )}
                      </td>
                      <td className="actions">
                        {editingId === item.id ? (
                          <>
                            <button
                              className="primary-button"
                              onClick={() => handleSave(item.id)}
                              disabled={submitting}
                              title="Salvar"
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
                          <button
                            className="icon-button"
                            title="Editar quantidade"
                            onClick={() => startEdit(item)}
                          >
                            <Edit3 size={16} />
                          </button>
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
            totalItems={itens.length}
            perPage={PER_PAGE}
            onChange={setPage}
          />
        </section>
      </div>
    </Layout>
  );
}
