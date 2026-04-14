import "./style.css";
import Layout from "../../components/Layout";
import {
  Box,
  Boxes,
  Users,
  Package,
  ClipboardList,
  HandHeart,
  Send,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import api from "../../services/api";
import * as echarts from "echarts";

function Home() {
  const { user } = useAuth();
  const { addToast } = useToast();
  const isAdmin = !!user?.admin;
  const [dashboard, setDashboard] = useState({
    voluntarios: 0,
    beneficiarios: 0,
    doacoes: 0,
    distribuicoes: 0,
    estoqueTotal: 0,
    itensBaixoEstoque: [],
  });
  const [loadingDash, setLoadingDash] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [inicioInput, setInicioInput] = useState("");
  const [fimInput, setFimInput] = useState("");
  const [seriesMov, setSeriesMov] = useState([]);
  const pieRef = useRef(null);
  const barRef = useRef(null);
  const lineRef = useRef(null);
  const chartPieInstance = useRef(null);
  const chartBarInstance = useRef(null);
  const chartLineInstance = useRef(null);

  const sections = [
    {
      title: "Gerenciar Itens",
      links: [
        { label: "Tipos", to: "/home/tipos", icon: Box },
        { label: "Tamanhos", to: "/home/tamanhos", icon: Boxes },
        { label: "Condições", to: "/home/condicoes", icon: ClipboardList },
        { label: "Itens", to: "/home/itens", icon: Package },
      ],
    },
    {
      title: "Gerenciar Doações",
      links: [
        {
          label: "Registrar doação",
          to: "/home/doacoes/nova",
          icon: HandHeart,
        },
        { label: "Listar doações", to: "/home/doacoes", icon: ClipboardList },
      ],
    },
    {
      title: "Gerenciar Distribuições",
      links: [
        {
          label: "Registrar distribuição",
          to: "/home/distribuicoes/nova",
          icon: Send,
        },
        {
          label: "Listar distribuições",
          to: "/home/distribuicoes",
          icon: ClipboardList,
        },
      ],
    },
    {
      title: "Gerenciar Pessoas",
      links: [
        { label: "Beneficiários", to: "/home/beneficiarios", icon: Users },
        { label: "Voluntários", to: "/home/voluntarios", icon: Users },
      ],
    },
    ...(isAdmin
      ? [
          {
            title: "Administração",
            links: [
              { label: "Voluntários", to: "/home/voluntarios", icon: Users },
              { label: "Cartões", to: "/home/cartoes", icon: ClipboardList },
            ],
          },
        ]
      : []),
  ];

  const fetchDashboard = async () => {
    setLoadingDash(true);
    try {
      const { data } = await api.get("/dashboard", {
        headers: user?.token ? { Authorization: `Bearer ${user.token}` } : {},
      });
      setDashboard(data);

      // séries de doações x distribuições
      const mov = await api.get("/relatorios/movimentacoes", {
        headers: user?.token ? { Authorization: `Bearer ${user.token}` } : {},
      });
      const byDate = new Map();
      const add = (arr, key) => {
        arr?.forEach((m) => {
          const dt = new Date(m.createdAt || m.data || m.dataCriacao);
          if (isNaN(dt.getTime())) return;
          const label = `${String(dt.getDate()).padStart(2, "0")}/${String(
            dt.getMonth() + 1
          ).padStart(2, "0")}`;
          const total =
            m.itens?.reduce((s, it) => s + (it.quantidade || 0), 0) || 0;
          const current = byDate.get(label) || {
            doacoes: 0,
            distribuicoes: 0,
          };
          current[key] += total;
          byDate.set(label, current);
        });
      };
      add(mov.data?.doacoes, "doacoes");
      add(mov.data?.distribuicoes, "distribuicoes");
      const labels = Array.from(byDate.keys()).sort((a, b) => {
        const [da, ma] = a.split("/").map(Number);
        const [db, mb] = b.split("/").map(Number);
        return ma === mb ? da - db : ma - mb;
      });
      const series = labels.map((l) => ({
        label: l,
        doacoes: byDate.get(l)?.doacoes || 0,
        distribuicoes: byDate.get(l)?.distribuicoes || 0,
      }));
      setSeriesMov(series);
    } catch {
      addToast("Não foi possível carregar o dashboard.", "error");
    } finally {
      setLoadingDash(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token]);

  useEffect(() => {
    if (dashboard) {
      if (pieRef.current) {
        if (!chartPieInstance.current) {
          chartPieInstance.current = echarts.init(pieRef.current);
        }
        chartPieInstance.current.setOption({
          tooltip: { trigger: "item" },
          legend: { bottom: 0 },
          series: [
            {
              type: "pie",
              radius: ["35%", "70%"],
              avoidLabelOverlap: false,
              label: { show: false },
              data: [
                { value: dashboard.voluntarios, name: "Voluntários" },
                { value: dashboard.beneficiarios, name: "Beneficiários" },
                { value: dashboard.doacoes, name: "Doações" },
                { value: dashboard.distribuicoes, name: "Distribuições" },
              ],
            },
          ],
        });
      }
      if (barRef.current) {
        if (!chartBarInstance.current) {
          chartBarInstance.current = echarts.init(barRef.current);
        }
        const labels =
          dashboard.itensBaixoEstoque?.map(
            (i) =>
              `${i.tipo?.descricao ?? "-"} / ${i.tamanho?.descricao ?? "-"} / ${
                i.condicao?.descricao ?? "-"
              }`
          ) || [];
        const values =
          dashboard.itensBaixoEstoque?.map((i) => i.quantidadeEstoque) || [];
        chartBarInstance.current.setOption({
          tooltip: { trigger: "axis" },
          grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
          xAxis: { type: "value" },
          yAxis: { type: "category", data: labels },
          series: [
            {
              type: "bar",
              data: values,
              itemStyle: { color: "#084c61" },
            },
          ],
        });
      }
      if (lineRef.current && seriesMov.length > 0) {
        if (!chartLineInstance.current) {
          chartLineInstance.current = echarts.init(lineRef.current);
        }
        chartLineInstance.current.setOption({
          tooltip: { trigger: "axis" },
          legend: { data: ["Doações", "Distribuições"], bottom: 0 },
          grid: { left: "3%", right: "4%", bottom: "15%", containLabel: true },
          xAxis: { type: "category", data: seriesMov.map((p) => p.label) },
          yAxis: { type: "value" },
          series: [
            {
              name: "Doações",
              type: "line",
              stack: "total",
              areaStyle: {},
              data: seriesMov.map((p) => p.doacoes),
              color: "#2e8b57",
            },
            {
              name: "Distribuições",
              type: "line",
              stack: "total",
              areaStyle: {},
              data: seriesMov.map((p) => p.distribuicoes),
              color: "#d62828",
            },
          ],
        });
      }
    }
    const onResize = () => {
      chartPieInstance.current?.resize();
      chartBarInstance.current?.resize();
      chartLineInstance.current?.resize();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      chartPieInstance.current?.dispose();
      chartBarInstance.current?.dispose();
      chartLineInstance.current?.dispose();
      chartPieInstance.current = null;
      chartBarInstance.current = null;
      chartLineInstance.current = null;
    };
  }, [dashboard, seriesMov]);

  const handleDownloadReport = async () => {
    const toDateOrUndefined = (value) => {
      if (!value) return undefined;
      const d = new Date(value);
      if (isNaN(d.getTime())) return null;
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = String(d.getFullYear());
      return `${day}/${month}/${year}`;
    };

    const inicioISO = toDateOrUndefined(inicioInput.trim());
    const fimISO = toDateOrUndefined(fimInput.trim());

    if (inicioISO === null || fimISO === null) {
      addToast(
        "Datas inválidas. Use o formato dd/mm/aaaa ou deixe em branco.",
        "error"
      );
      return false;
    }

    if (inicioInput && fimInput && new Date(inicioInput) > new Date(fimInput)) {
      addToast("A data inicial não pode ser maior que a data final.", "error");
      return false;
    }

    const params = { formato: "pdf" };
    if (inicioISO) params.inicio = inicioISO;
    if (fimISO) params.fim = fimISO;

    const headers = {
      ...(user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
      Accept: "application/pdf",
    };

    const parseFilename = (contentDisposition) => {
      if (!contentDisposition) return null;
      const match = /filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i.exec(
        contentDisposition
      );
      return decodeURIComponent(match?.[1] || match?.[2] || "");
    };

    try {
      const response = await api.get("/relatorios/movimentacoes", {
        headers,
        responseType: "blob",
        params,
      });

      const contentType = response.headers["content-type"];
      if (contentType && contentType.includes("application/json")) {
        try {
          const text = await response.data.text();
          const json = JSON.parse(text);
          addToast(
            json.message || "Não foi possível baixar o relatório.",
            "error"
          );
        } catch {
          addToast("Não foi possível baixar o relatório.", "error");
        }
        return false;
      }

      const filename =
        parseFilename(response.headers["content-disposition"]) ||
        "relatorio-movimentacoes.pdf";
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      addToast("Relatório PDF baixado com sucesso.", "success");
      return true;
    } catch {
      addToast("Não foi possível baixar o relatório.", "error");
      return false;
    }
  };

  return (
    <Layout>
      <div className="home-page basetext-inter">
        <div className="dashboard-header">
          <h1 className="home-title destaque-archivo-black">Área do Sistema</h1>
          <button
            className="primary-button download-report"
            onClick={() => setReportModalOpen(true)}
          >
            <Download size={16} />
            Baixar relatório
          </button>
        </div>

        {reportModalOpen && (
          <div className="modal-overlay">
            <div className="modal-card">
              <div className="modal-header">
                <h3>Baixar relatório em PDF</h3>
                <button
                  className="modal-close"
                  onClick={() => setReportModalOpen(false)}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>
              <p className="modal-subtitle">
                Informe opcionalmente um intervalo de datas para filtrar o
                relatório.
              </p>
              <div className="modal-body">
                <div className="modal-fields">
                  <label className="input-group">
                    <span>Data inicial</span>
                    <input
                      type="date"
                      lang="pt-BR"
                      placeholder="dd/mm/aaaa"
                      value={inicioInput}
                      onChange={(e) => setInicioInput(e.target.value)}
                      max={fimInput || undefined}
                    />
                  </label>
                  <label className="input-group">
                    <span>Data final</span>
                    <input
                      type="date"
                      lang="pt-BR"
                      placeholder="dd/mm/aaaa"
                      value={fimInput}
                      onChange={(e) => setFimInput(e.target.value)}
                      min={inicioInput || undefined}
                    />
                  </label>
                </div>
              </div>
              <div className="modal-actions">
                <button
                  className="secondary-button"
                  onClick={() => setReportModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  className="primary-button"
                  onClick={async () => {
                    const ok = await handleDownloadReport();
                    if (ok !== false) {
                      setReportModalOpen(false);
                    }
                  }}
                >
                  Baixar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="metrics-grid">
          <div className="metric-card">
            <p>Voluntários</p>
            <h3>{dashboard.voluntarios}</h3>
          </div>
          <div className="metric-card">
            <p>Beneficiários</p>
            <h3>{dashboard.beneficiarios}</h3>
          </div>
          <div className="metric-card">
            <p>Doações</p>
            <h3>{dashboard.doacoes}</h3>
          </div>
          <div className="metric-card">
            <p>Distribuições</p>
            <h3>{dashboard.distribuicoes}</h3>
          </div>
          <div className="metric-card">
            <p>Estoque total</p>
            <h3>{dashboard.estoqueTotal}</h3>
          </div>
        </div>

        {seriesMov.length > 0 && (
          <div className="chart-card">
            <div className="chart-title">Movimentações (itens doados x distribuídos)</div>
            <div className="chart-body" ref={lineRef}></div>
          </div>
        )}

        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-title">Panorama geral</div>
            <div className="chart-body" ref={pieRef}></div>
          </div>
          <div className="chart-card">
            <div className="chart-title">Itens com menor estoque</div>
            <div className="chart-body" ref={barRef}></div>
          </div>
        </div>

        <div className="home-grid">
          {sections.map((section) => (
            <div key={section.title} className="home-section">
              <h2 className="section-title">{section.title}</h2>
              <div className="section-links">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="link-card basetext-inter"
                    >
                      <Icon size={22} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
