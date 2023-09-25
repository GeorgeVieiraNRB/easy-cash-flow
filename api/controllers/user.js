import { db } from "../db.js";

// Rota para obter todos os cartões
export const getCards = (_, res) => {
    const q = "SELECT * FROM cards";
    // Executa uma consulta SQL para recuperar todos os cartões da base de dados
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        // Retorna os dados dos cartões em formato JSON
        return res.status(200).json(data);
    });
};

// Rota para adicionar um novo cartão
export const addCard = (req, res) => {
    const q = "INSERT INTO cards(`nome`,`descricao`,`valor`) VALUES(?)";
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.valor,
    ];

    // Executa uma consulta SQL para inserir um novo cartão na base de dados
    db.query(q, [values], (err) => {
        if (err) return res.json(err);
        // Retorna uma mensagem de sucesso após a inserção do cartão
        return res.status(200).json("Card criado com sucesso.");
    });
};

// Rota para atualizar um cartão existente
export const updateCard = (req, res) => {
    const q = "UPDATE cards SET `nome`= ?,`descricao` = ?,`valor` = ? WHERE `codigo` = ?";
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.valor,
    ];

    // Executa uma consulta SQL para atualizar um cartão existente na base de dados
    db.query(q, [...values, req.params.codigo], (err) => {
        if (err) return res.json(err);
        // Retorna uma mensagem de sucesso após a atualização do cartão
        return res.status(200).json("Card atualizado com sucesso.");
    });
}

// Rota para excluir um cartão existente
export const deleteCard = (req, res) => {
    const q = "DELETE FROM cards WHERE `codigo` = ?";

    // Executa uma consulta SQL para excluir um cartão da base de dados
    db.query(q, [req.params.codigo], (err) => {
        if (err) return res.json(err);
        // Retorna uma mensagem de sucesso após a exclusão do cartão
        return res.status(200).json("Card deletado com sucesso.");
    });
}
