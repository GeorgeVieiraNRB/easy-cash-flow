import express from "express";
import useRoutes from "./routes/users.js"; // Importa as rotas do arquivo users.js
import cors from "cors";

const app = express();

app.use(express.json()); // Permite que o aplicativo utilize JSON para análise de corpo de requisição
app.use(cors()); // Habilita o middleware de CORS para permitir solicitações de diferentes origens

app.use("/", useRoutes); // Define as rotas a serem utilizadas pelo aplicativo

app.listen(8800); // Inicia o servidor na porta 8800
