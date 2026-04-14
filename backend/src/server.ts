import express, { Request, Response } from "express";
import startServer from "./scripts/startServer";
import { setupSwagger } from "./config/swagger";
import cors from "cors";
// Rota de autenticação
import authRoutes from './routes/auth.routes';

// Importa as rotas de doação
import doacaoRoutes from './routes/doacao.routes';

// Importa as rotas de item
import tipoRoutes from './routes/tipo.routes';
import tamanhoRoutes from './routes/tamanho.routes';
import condicaoRoutes from './routes/condicao.routes';
import itemRoutes from './routes/item.routes';
import dashboardRoutes from './routes/dashboard.routes';
import relatorioRoutes from './routes/relatorio.routes';

//rotas de beneficiarios
import beneficiarioRoutes from './routes/beneficiario.routes';
import cartaoRoutes from './routes/cartao.routes';

//rotas de voluntarios
import voluntarioRoutes from './routes/voluntario.routes';
import distribuicaoRoutes from "./routes/distribuicao.routes";

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 204,
};

const app = express();
app.use(express.json(), cors(corsOptions));

// Formata automaticamente campos Date para dd/mm/aaaa nas respostas JSON
const formatDateBR = (date: Date) => {
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = String(d.getFullYear());
  return `${day}/${month}/${year}`;
};

const mapDates = (data: any): any => {
  if (data instanceof Date) return formatDateBR(data);
  if (Array.isArray(data)) return data.map(mapDates);
  if (data && typeof data === 'object') {
    return Object.entries(data).reduce((acc, [key, value]) => {
      acc[key] = mapDates(value);
      return acc;
    }, {} as Record<string, any>);
  }
  return data;
};

app.use((req, res, next) => {
  const originalJson = res.json.bind(res);
  res.json = (body: any) => originalJson(mapDates(body));
  next();
});

setupSwagger(app);

app.get("/", (req: Request, res: Response) => {
  res.send({
    "Hello": "World"
  });
});

// Rotas de doação
app.use('/doacoes', doacaoRoutes);

// Rotas de distrubuicao

app.use('/distribuicoes', distribuicaoRoutes);

// Rotas de item
app.use('/itens', itemRoutes);
app.use('/item/tipos', tipoRoutes);
app.use('/item/tamanhos', tamanhoRoutes);
app.use('/item/condicoes', condicaoRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/relatorios', relatorioRoutes);

//rotas de beneficiarios
app.use('/beneficiarios', beneficiarioRoutes);
app.use('/cartoes', cartaoRoutes);

//rotas de voluntarios
app.use('/voluntarios', voluntarioRoutes);

// Rota de autenticação
app.use('/auth', authRoutes);

startServer(app);
