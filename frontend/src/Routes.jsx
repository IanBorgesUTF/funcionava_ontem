import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/home";
import BemVindo from "./pages/BemVindo/bemVindo";
import Tipos from "./pages/Tipos/Tipos";
import Tamanhos from "./pages/Tamanhos/Tamanhos";
import Condicoes from "./pages/Condicoes/Condicoes";
import Beneficiarios from "./pages/Beneficiarios/Beneficiarios";
import Voluntarios from "./pages/Voluntarios/Voluntarios";
import Itens from "./pages/Itens/Itens";
import Cartoes from "./pages/Cartoes/Cartoes";
import Doacoes from "./pages/Doacoes/Doacoes";
import NovaDoacao from "./pages/Doacoes/NovaDoacao";
import Distribuicoes from "./pages/Distribuicoes/Distribuicoes";
import NovaDistribuicao from "./pages/Distribuicoes/NovaDistribuicao";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./context/ProtectedRoute";

export function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<BemVindo />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/tipos" element={<Tipos />} />
            <Route path="/home/tamanhos" element={<Tamanhos />} />
            <Route path="/home/condicoes" element={<Condicoes />} />
            <Route path="/home/itens" element={<Itens />} />
            <Route path="/home/beneficiarios" element={<Beneficiarios />} />
            <Route path="/home/voluntarios" element={<Voluntarios />} />
            <Route path="/home/cartoes" element={<Cartoes />} />
            <Route path="/home/doacoes" element={<Doacoes />} />
            <Route path="/home/doacoes/nova" element={<NovaDoacao />} />
            <Route path="/home/distribuicoes" element={<Distribuicoes />} />
            <Route path="/home/distribuicoes/nova" element={<NovaDistribuicao />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
