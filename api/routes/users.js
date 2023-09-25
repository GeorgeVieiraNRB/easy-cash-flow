import express from "express";

// Importa as funções de controle dos cartões a partir do arquivo "../controllers/user.js"
import { getCards, addCard, updateCard, deleteCard } from "../controllers/user.js";

const router = express.Router();

// Rota GET para obter todos os cartões
router.get("/", getCards);

// Rota POST para adicionar um novo cartão
router.post("/", addCard);

// Rota PUT para atualizar um cartão pelo código
router.put("/:codigo", updateCard);

// Rota DELETE para excluir um cartão pelo código
router.delete("/:codigo", deleteCard);

export default router;
