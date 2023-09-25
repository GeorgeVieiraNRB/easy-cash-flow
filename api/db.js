import mysql from "mysql";

// Cria uma conexão com o banco de dados MySQL
export const db = mysql.createConnection({
    host: "localhost", // Endereço do servidor MySQL
    user: "root",      // Nome de usuário do banco de dados
    password: "password", // Senha do banco de dados
    database: "cash"   // Nome do banco de dados a ser usado
});
