import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, LogOut, Menu } from "lucide-react";
import "./Layout.css";
import useAuth from "../hooks/useAuth";

function AccordionItem({ title, links, isOpen, onToggle }) {
  return (
    <div className="accordion-section basetext-inter">
      <button className="accordion-button" onClick={onToggle}>
        <span>{title}</span>
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
          <ChevronRight size={18} />
        </span>
      </button>
      <div className={`accordion-panel ${isOpen ? "open" : ""}`}>
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="accordion-link">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const userInitials = useMemo(
    () => (user?.email ? user.email[0].toUpperCase() : "?"),
    [user]
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdmin = !!user?.admin;
  const menuRef = useRef(null);
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    const width = window.innerWidth;
    const stored = localStorage.getItem("sidebarCollapsed");
    if (width <= 1024) return true;
    return stored ? stored === "true" : false;
  });
  const [openSections, setOpenSections] = useState(() => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem("sidebarOpenSections");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", String(sidebarCollapsed));
  }, [sidebarCollapsed]);

  useEffect(() => {
    localStorage.setItem("sidebarOpenSections", JSON.stringify(openSections));
  }, [openSections]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // abre seções por padrão na primeira carga quando não há estado salvo
  useEffect(() => {
    if (Object.keys(openSections).length === 0) {
      setOpenSections({
        "Gerenciar Itens": true,
        "Gerenciar Doações": true,
        "Gerenciar Distribuições": true,
        "Gerenciar Pessoas": true,
        "Administração": true,
      });
    }
  }, []); // run once

  // Auto-colapsa em telas <= 1024, expande conforme preferencia em telas maiores
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 1024) {
        setSidebarCollapsed(true);
      } else {
        const stored = localStorage.getItem("sidebarCollapsed");
        setSidebarCollapsed(stored ? stored === "true" : false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pathnames = location.pathname.split("/").filter(Boolean);
  const labelMap = {
    home: "Home",
    tipos: "Tipos",
    tamanhos: "Tamanhos",
    condicoes: "Condições",
    itens: "Itens",
    beneficiarios: "Beneficiários",
    voluntarios: "Voluntários",
    cartoes: "Cartões",
    doacoes: "Doações",
    distribuicoes: "Distribuições",
    nova: "Nova",
    login: "Login",
  };

  const breadcrumbs = pathnames.map((segment, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      label: labelMap[segment] ?? decodeURIComponent(segment),
      to,
    };
  });

  return (
    <div className={`app-shell ${sidebarCollapsed ? "collapsed" : ""}`}>
      <header className="app-header">
        <div className="left">
          <button
            className="ghost-button icon-only"
            type="button"
            onClick={() => setSidebarCollapsed((prev) => !prev)}
            title={sidebarCollapsed ? "Expandir menu" : "Recolher menu"}
          >
            <Menu size={18} />
          </button>
        </div>
        <div className="right">
          <div className="user-menu-wrapper" ref={menuRef}>
            <button
              className="user-pill"
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <div className="user-info">
                <div className="user-avatar">{userInitials}</div>
                <span>{user?.email || "Usuário"}</span>
              </div>
            </button>
            {menuOpen && (
              <div className="user-menu" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={logout}
                  className="user-menu-item"
                >
                  <span>Sair</span>
                  <LogOut size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <aside className={`app-sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-logo">
          <Link to="/home" className="sidebar-brand">
            <div className="sidebar-text destaque-archivo-black">SANEM</div>
          </Link>
        </div>
        <div className="accordion">
          <AccordionItem
            title="Gerenciar Itens"
            links={[
              { label: "Tipos", to: "/home/tipos" },
              { label: "Tamanhos", to: "/home/tamanhos" },
              { label: "Condições", to: "/home/condicoes" },
              { label: "Itens", to: "/home/itens" },
            ]}
            isOpen={!!openSections["Gerenciar Itens"]}
            onToggle={() => toggleSection("Gerenciar Itens")}
          />
          <AccordionItem
            title="Gerenciar Doações"
            links={[
              { label: "Registrar doação", to: "/home/doacoes/nova" },
              { label: "Listar doações", to: "/home/doacoes" },
            ]}
            isOpen={!!openSections["Gerenciar Doações"]}
            onToggle={() => toggleSection("Gerenciar Doações")}
          />
          <AccordionItem
            title="Gerenciar Distribuições"
            links={[
              {
                label: "Registrar distribuição",
                to: "/home/distribuicoes/nova",
              },
              { label: "Listar distribuições", to: "/home/distribuicoes" },
            ]}
            isOpen={!!openSections["Gerenciar Distribuições"]}
            onToggle={() => toggleSection("Gerenciar Distribuições")}
          />
          <AccordionItem
            title="Gerenciar Pessoas"
            links={[
              { label: "Beneficiários", to: "/home/beneficiarios" },
              { label: "Voluntários", to: "/home/voluntarios" },
            ]}
            isOpen={!!openSections["Gerenciar Pessoas"]}
            onToggle={() => toggleSection("Gerenciar Pessoas")}
          />
          {isAdmin && (
            <AccordionItem
              title="Administração"
              links={[
                { label: "Voluntários", to: "/home/voluntarios" },
                { label: "Cartões", to: "/home/cartoes" },
              ]}
              isOpen={!!openSections["Administração"]}
              onToggle={() => toggleSection("Administração")}
            />
          )}
        </div>
      </aside>

      <main className="app-content">
        {breadcrumbs.length > 0 && (
          <div className="breadcrumbs basetext-inter">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.to} className="breadcrumb-item">
                {index > 0 && <span className="breadcrumb-sep">/</span>}
                {index < breadcrumbs.length - 1 ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
