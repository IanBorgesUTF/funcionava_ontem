import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Plus, Trash2, Search } from "lucide-react";
import Pagination from "../../components/Pagination";
import "./style.css";

export default function NovaDoacao() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [tipos, setTipos] = useState([]);
  const [tamanhos, setTamanhos] = useState([]);
  const [condicoes, setCondicoes] = useState([]);
  const [itens, setItens] = useState([]);
  const [form, setForm] = useState({
    tipoId: "",
    tamanhoId: "",
    condicaoId: "",
    quantidade: "",
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [pageForm, setPageForm] = useState(1);
  const PER_PAGE_FORM = 5;

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

  const fetchOptions = async () => {
    if (!user?.token) return;
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  const addItem = () => {
    const { tipoId, tamanhoId, condicaoId, quantidade } = form;
    const qty = Number(quantidade);
    if (!tipoId || !tamanhoId || !condicaoId || !quantidade) {
      addToast("Preencha tipo, tamanho, condição e quantidade.", "warning");
      return;
    }
    if (Number.isNaN(qty) || qty <= 0) {
      addToast("Quantidade deve ser um número maior que zero.", "warning");
      return;
    }
    setItens((prev) => [...prev, { tipoId: Number(tipoId), tamanhoId: Number(tamanhoId), condicaoId: Number(condicaoId), quantidade: qty }]);
    setForm({ tipoId: "", tamanhoId: "", condicaoId: "", quantidade: "" });
  };

  const removeItem = (index) => {
    setItens((prev) => prev.filter((_, i) => i !== index));
  };

  const submit = async () => {
    if (itens.length === 0) {
      addToast("Adicione ao menos um item.", "warning");
      return;
    }
    setSubmitting(true);
    try {
      await api.post(
        "/doacoes",
        { itens },
        { headers }
      );
      addToast("Doação registrada com sucesso.", "success");
      setItens([]);
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const filteredItens = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return itens;
    return itens.filter((i) => {
      const tipo = tipos.find((t) => t.id === i.tipoId)?.descricao ?? "";
      const tam = tamanhos.find((t) => t.id === i.tamanhoId)?.descricao ?? "";
      const cond = condicoes.find((c) => c.id === i.condicaoId)?.descricao ?? "";
      return `${tipo} ${tam} ${cond} ${i.quantidade}`.toLowerCase().includes(term);
    });
  }, [itens, search, tipos, tamanhos, condicoes]);

  const paginatedItens = useMemo(() => {
    const start = (pageForm - 1) * PER_PAGE_FORM;
    return filteredItens.slice(start, start + PER_PAGE_FORM);
  }, [filteredItens, pageForm]);

  const renderSelect = (label, value, onChange, options, placeholder, extraClass = "") => (
    <label className={`basetext-inter form-label ${extraClass}`}>
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.descricao}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <Layout>
      <div className="doacoes-page basetext-inter">
        <div className="doacoes-header">
          <div>
            <h1 className="destaque-archivo-black">Registrar Doação</h1>
            <p>Adicione itens e quantidades para registrar uma nova doação</p>
          </div>
        </div>

        <section className="endpoint-card">
          <div className="form-grid">
            {renderSelect("Tipo", form.tipoId, (val) => setForm((f) => ({ ...f, tipoId: val })), tipos, "Selecione o tipo")}
            {renderSelect(
              "Tamanho",
              form.tamanhoId,
              (val) => setForm((f) => ({ ...f, tamanhoId: val })),
              form.tipoId ? tamanhos.filter((t) => t.tipoId === Number(form.tipoId)) : tamanhos,
              "Selecione o tamanho",
              "small-field"
            )}
            {renderSelect("Condição", form.condicaoId, (val) => setForm((f) => ({ ...f, condicaoId: val })), condicoes, "Selecione a condição")}
            <label className="basetext-inter form-label qty">
              Quantidade
              <input
                type="number"
                min="1"
                value={form.quantidade}
                onChange={(e) => setForm((f) => ({ ...f, quantidade: e.target.value }))}
                placeholder="Ex.: 5"
              />
            </label>
          </div>
          <div className="actions-row">
            <button type="button" className="primary-button add-button" onClick={addItem} disabled={loading || submitting}>
              <Plus size={16} /> Adicionar item
            </button>
          </div>

          <div className="list-actions">
            <div className="search-input">
              <Search size={16} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filtrar itens adicionados"
              />
            </div>
          </div>

          <div className="list-block">
            {filteredItens.length === 0 ? (
              <p>Nenhum item adicionado.</p>
            ) : (
              <>
                <table className="doacoes-table">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Tamanho</th>
                      <th>Condição</th>
                      <th>Qtd</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedItens.map((i, idx) => {
                      const tipo = tipos.find((t) => t.id === i.tipoId)?.descricao ?? "-";
                      const tam = tamanhos.find((t) => t.id === i.tamanhoId)?.descricao ?? "-";
                      const cond = condicoes.find((c) => c.id === i.condicaoId)?.descricao ?? "-";
                      const globalIndex = (pageForm - 1) * 5 + idx;
                      return (
                        <tr key={`${i.tipoId}-${i.tamanhoId}-${i.condicaoId}-${globalIndex}`}>
                          <td>{tipo}</td>
                          <td>{tam}</td>
                          <td>{cond}</td>
                          <td>{i.quantidade}</td>
                          <td className="actions">
                            <button
                              className="icon-button danger"
                              type="button"
                              title="Remover"
                              onClick={() => removeItem(globalIndex)}
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <Pagination
                  page={pageForm}
                  totalItems={filteredItens.length}
                  perPage={PER_PAGE_FORM}
                  onChange={setPageForm}
                  compact
                />
              </>
            )}
          </div>

          <div className="actions-row end">
            <button
              type="button"
              className="primary-button"
              onClick={submit}
              disabled={submitting || itens.length === 0}
            >
              {submitting ? "Enviando..." : "Registrar doação"}
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
