import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import {
  Search,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Eye,
  X,
  Power,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import "./style.css";

const formatCpf = (value) => {
  const digits = (value || "").replace(/\D/g, "").slice(0, 11);
  if (digits.length !== 11) return value || "-";
  return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const parseDateValue = (value) => {
  if (!value) return null;
  if (typeof value === "string" && value.includes("/")) {
    const [d, m, y] = value.split("/");
    const dt = new Date(Number(y), Number(m) - 1, Number(d));
    return isNaN(dt.getTime()) ? null : dt;
  }
  const dt = new Date(value);
  return isNaN(dt.getTime()) ? null : dt;
};

export default function Cartoes() {
  const { user } = useAuth();
  const { addToast } = useToast();

  const [beneficiarios, setBeneficiarios] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ultimoCartao, setUltimoCartao] = useState(null);
  const [cartoes, setCartoes] = useState([]);
  const [infoModal, setInfoModal] = useState(null);
  const [pageBenef, setPageBenef] = useState(1);
  const [pageTable, setPageTable] = useState(1);

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

  const fetchBeneficiarios = async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const [benefRes, cardRes] = await Promise.all([
        api.get("/beneficiarios", { headers }),
        api.get("/cartoes", { headers }),
      ]);
      setBeneficiarios(benefRes.data);
      setCartoes(cardRes.data);
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

  const filtrados = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return beneficiarios;
    return beneficiarios.filter((b) =>
      `${b.nome} ${b.cpf}`.toLowerCase().includes(term)
    );
  }, [beneficiarios, search]);

  const paginatedBenefs = useMemo(() => {
    const perPage = 3;
    const start = (pageBenef - 1) * perPage;
    return filtrados.slice(start, start + perPage);
  }, [filtrados, pageBenef]);

  const paginatedTable = useMemo(() => {
    const perPage = 10;
    const start = (pageTable - 1) * perPage;
    return filtrados.slice(start, start + perPage);
  }, [filtrados, pageTable]);

  const cartaoByBenef = useMemo(() => {
    const map = new Map();
    cartoes.forEach((c) => map.set(c.beneficiarioId, c));
    return map;
  }, [cartoes]);

  const isExpired = (cartao) => {
    const dt = parseDateValue(cartao?.dataValidade);
    if (!dt) return false;
    const today = new Date();
    return dt < today;
  };

  const handleGerar = async (benefIdParam) => {
    const alvoId = benefIdParam ?? selectedId;
    if (!alvoId) {
      addToast("Selecione um beneficiário para gerar o cartão.", "warning");
      return;
    }
    setSelectedId(alvoId);
    setSubmitting(true);
    try {
      const { data } = await api.post(
        "/cartoes",
        { beneficiarioId: Number(alvoId) },
        { headers }
      );
      const benef = beneficiarios.find((b) => b.id === Number(alvoId));
      const cardWithBenef = {
        ...data,
        Beneficiario:
          data.Beneficiario ??
          (benef ? { nome: benef.nome, cpf: benef.cpf } : undefined),
        beneficiarioNome: benef?.nome,
      };
      setUltimoCartao(cardWithBenef);
      setCartoes((prev) => {
        const outros = prev.filter(
          (c) => c.beneficiarioId !== data.beneficiarioId
        );
        return [...outros, cardWithBenef];
      });
      addToast("Cartão gerado com sucesso.", "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleStatus = async (cartao) => {
    setSubmitting(true);
    try {
      const { data } = await api.patch(
        `/cartoes/${cartao.id}/status`,
        { ativo: !cartao.ativo },
        { headers }
      );
      setCartoes((prev) => prev.map((c) => (c.id === data.id ? data : c)));
      if (infoModal && infoModal.id === data.id) setInfoModal(data);
      addToast(`Cartão ${data.ativo ? "ativado" : "desativado"}.`, "success");
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="cartoes-page basetext-inter">
        <div className="cartoes-header">
          <div>
            <h1 className="destaque-archivo-black">Cartões</h1>
            <p>Gere um cartão para um beneficiário.</p>
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

        <div className="card-panel">
          <div className="selector">
            <h3>Selecione o beneficiário</h3>
            <div className="search-row">
              <div className="search-input">
                <Search size={16} />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por nome ou CPF"
                />
              </div>
            </div>
            <div className="benef-list">
              {filtrados.length === 0 ? (
                <p className="muted">Nenhum beneficiário encontrado.</p>
              ) : (
                paginatedBenefs.map((b) => {
                  const cartao = cartaoByBenef.get(b.id);
                  const expired = cartao ? isExpired(cartao) : false;
                  const hasCard = !!cartao && !expired;
                  return (
                    <button
                      key={b.id}
                      className={`benef-card ${hasCard ? "has-card" : ""}`}
                      onClick={() => (!hasCard ? handleGerar(b.id) : null)}
                      disabled={submitting || hasCard}
                    >
                      <div className="benef-card-header">
                        <span className="benef-name">{b.nome}</span>
                        <span
                          className={`status-pill ${
                            hasCard ? "on" : expired ? "expired" : "off"
                          }`}
                        >
                          {hasCard
                            ? "Já possui cartão"
                            : expired
                            ? "Cartão vencido — gerar novo"
                            : "Gerar agora"}
                        </span>
                      </div>
                      <div className="benef-card-body">
                        <span className="cpf">{formatCpf(b.cpf)}</span>
                        <span className="telefone">{b.telefone || "-"}</span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
            <div className="pagination-row centered basetext-inter">
              <Pagination
                page={pageBenef}
                totalItems={filtrados.length}
                perPage={3}
                onChange={setPageBenef}
                compact
              />
            </div>
          </div>

          {ultimoCartao && (
            <div className="cartao-resultado">
              <div className="resultado-header">
                <CheckCircle2 size={18} color="#2e8b57" />
                <h4>Cartão gerado</h4>
              </div>
              <div className="cartao-detalhes">
                <p>
                  <strong>Número:</strong> {ultimoCartao.numeroCartao}
                </p>
                <p>
                  <strong>Validade:</strong> {ultimoCartao.dataValidade}
                </p>
                <p>
                  <strong>Código de segurança:</strong>{" "}
                  {ultimoCartao.codigoSeguranca}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {ultimoCartao.ativo ? "Ativo" : "Inativo"}
                </p>
              </div>
              <div className="alerta">
                <AlertTriangle size={16} />
                <span>
                  Guarde o código de segurança; ele é importante para o login no
                  app do Beneficiario.
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="list-block">
          <h3>Beneficiários e cartões</h3>
          {loading ? (
            <p>Carregando...</p>
          ) : filtrados.length === 0 ? (
            <p>Nenhum beneficiário encontrado.</p>
          ) : (
            <table className="cartoes-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Cartão</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTable.map((b) => {
                  const cartao = cartaoByBenef.get(b.id);
                  return (
                    <tr key={b.id}>
                      <td>{b.id}</td>
                      <td>{b.nome}</td>
                      <td>{formatCpf(b.cpf)}</td>
                      <td>
                        {cartao
                          ? isExpired(cartao)
                            ? "Vencido"
                            : cartao.ativo
                            ? "Ativo"
                            : "Inativo"
                          : "Sem cartão"}
                      </td>
                      <td className="actions">
                        {cartao ? (
                          <button
                            className="icon-button"
                            title="Ver detalhes do cartão"
                            onClick={() => setInfoModal(cartao)}
                          >
                            <Eye size={16} />
                          </button>
                        ) : (
                          <span className="muted">
                            Nenhum cartão cadastrado
                          </span>
                        )}
                        {cartao && !isExpired(cartao) && (
                          <button
                            className="icon-button"
                            title={
                              cartao.ativo
                                ? "Desativar cartão"
                                : "Ativar cartão"
                            }
                            onClick={() => toggleStatus(cartao)}
                            disabled={submitting}
                          >
                            <Power size={16} />
                          </button>
                        )}
                        {cartao && isExpired(cartao) && (
                          <button
                            className="icon-button"
                            title="Gerar novo cartão"
                            onClick={() => handleGerar(b.id)}
                            disabled={submitting}
                          >
                            <CreditCard size={16} />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <Pagination
        page={pageTable}
        totalItems={filtrados.length}
        perPage={10}
        onChange={setPageTable}
      />

      {infoModal && (
        <div className="modal-overlay" onClick={() => setInfoModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Dados do cartão</h3>
              <button
                className="modal-close"
                onClick={() => setInfoModal(null)}
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>
            <div className="cartao-detalhes">
              <p>
                <strong>Beneficiário:</strong>{" "}
                {infoModal.Beneficiario?.nome ||
                  infoModal.beneficiarioNome ||
                  "-"}{" "}
                (ID: {infoModal.beneficiarioId})
              </p>
              <p>
                <strong>Número:</strong> {infoModal.numeroCartao}
              </p>
              <p>
                <strong>Validade:</strong> {infoModal.dataValidade}
              </p>
              <p>
                <strong>Código de segurança:</strong>{" "}
                {infoModal.codigoSeguranca}
              </p>
              <p>
                <strong>Status:</strong> {infoModal.ativo ? "Ativo" : "Inativo"}
              </p>
            </div>
            <div className="alerta">
              <AlertTriangle size={16} />
              <span>
                Use estas informações apenas quando o beneficiário solicitar.
              </span>
            </div>
            <div className="modal-actions-row">
              <button
                className={infoModal.ativo ? "danger-button" : "success-button"}
                onClick={() => toggleStatus(infoModal)}
                disabled={submitting}
              >
                {infoModal.ativo ? "Desativar" : "Ativar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
