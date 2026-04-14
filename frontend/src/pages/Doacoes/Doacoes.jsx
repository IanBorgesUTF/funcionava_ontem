import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Search, RefreshCw, Eye, X } from "lucide-react";
import "./style.css";
import Pagination from "../../components/Pagination";

export default function Doacoes() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [doacoes, setDoacoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [pageModal, setPageModal] = useState(1);
  const PER_PAGE = 8;
  const PER_MODAL = 5;

  const headers = useMemo(
    () => (user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
    [user?.token]
  );

  const handleApiError = (error) => {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Não foi possível carregar as doações.";
    addToast(message, "error");
  };

  const fetchDoacoes = async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const { data } = await api.get("/doacoes", { headers });
      setDoacoes(data);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoacoes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  const formatDate = (value) => {
    if (!value) return "-";
    const parse = (v) => {
      if (typeof v === "string" && v.includes("/")) {
        const [d, m, y] = v.split("/");
        return new Date(Number(y), Number(m) - 1, Number(d));
      }
      return new Date(v);
    };
    const d = parse(value);
    if (isNaN(d.getTime())) return "-";
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = String(d.getFullYear());
    return `${day}/${month}/${year}`;
  };

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return doacoes;
    return doacoes.filter((d) => {
      const itensStr =
        d.itens
          ?.map((i) => {
            const item = i.item || {};
            return `${item?.tipo?.descricao ?? ""} ${
              item?.tamanho?.descricao ?? ""
            } ${item?.condicao?.descricao ?? ""} ${i.quantidade ?? ""}`;
          })
          .join(" ")
          .toLowerCase() ?? "";
      const voluntario = `${d.voluntario?.nome ?? ""} ${
        d.voluntario?.email ?? ""
      }`.toLowerCase();
      const idStr = String(d.id ?? "");
      return (
        itensStr.includes(term) ||
        voluntario.includes(term) ||
        idStr.includes(term)
      );
    });
  }, [doacoes, search]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  return (
    <Layout>
      <div className="doacoes-page basetext-inter">
        <div className="doacoes-header">
          <div>
            <h1 className="destaque-archivo-black">Doações</h1>
            <p>Listagem das doações registradas</p>
          </div>
          <button
            className="ghost-button icon-only"
            onClick={fetchDoacoes}
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
                placeholder="Buscar por voluntário, item ou ID"
              />
            </div>
          </div>

          <div className="list-block">
            {loading ? (
              <p>Carregando...</p>
            ) : filtered.length === 0 ? (
              <p>Nenhuma doação encontrada.</p>
            ) : (
              <table className="doacoes-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Voluntário</th>
                    <th>Data</th>
                    <th>Itens</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((d) => (
                    <tr key={d.id}>
                      <td>{d.id}</td>
                      <td>
                        {d.voluntario?.nome || d.voluntario?.email || "-"}
                      </td>
                      <td>{formatDate(d.createdAt)}</td>
                      <td>
                        <div className="itens-tags">
                          {d.itens?.map((i) => {
                            const item = i.item || {};
                            return (
                              <span key={i.id} className="tag-pill">
                                {item.tipo?.descricao ?? "Tipo"} /{" "}
                                {item.tamanho?.descricao ?? "Tam"} /{" "}
                                {item.condicao?.descricao ?? "Cond"} —{" "}
                                {i.quantidade}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      <td className="actions">
                        <button
                          className="icon-button view"
                          title="Ver detalhes"
                          onClick={() => setSelected(d)}
                        >
                          <Eye size={16} />
                        </button>
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

        {selected && (
          <div className="modal-backdrop" onClick={() => setSelected(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <h3 className="destaque-archivo-black">
                    Doação #{selected.id}
                  </h3>
                  <p className="basetext-inter">
                    Voluntário:{" "}
                    {selected.voluntario?.nome ||
                      selected.voluntario?.email ||
                      "-"}{" "}
                    | Data: {formatDate(selected.createdAt)}
                  </p>
                </div>
                <button
                  className="close-btn icon-only"
                  onClick={() => setSelected(null)}
                  title="Fechar"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="modal-content">
                <h4 className="basetext-inter">Itens</h4>
                <table className="doacoes-table inner">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Tamanho</th>
                      <th>Condição</th>
                      <th>Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.itens
                      ?.slice(
                        (pageModal - 1) * PER_MODAL,
                        (pageModal - 1) * PER_MODAL + PER_MODAL
                      )
                      .map((i, idx) => {
                        const item = i.item || {};
                        return (
                          <tr key={i.id ?? `${selected.id}-item-${idx}`}>
                            <td>{item.tipo?.descricao ?? "-"}</td>
                            <td>{item.tamanho?.descricao ?? "-"}</td>
                            <td>{item.condicao?.descricao ?? "-"}</td>
                            <td>{i.quantidade}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                <Pagination
                  page={pageModal}
                  totalItems={selected.itens?.length || 0}
                  perPage={PER_MODAL}
                  onChange={setPageModal}
                  compact
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
