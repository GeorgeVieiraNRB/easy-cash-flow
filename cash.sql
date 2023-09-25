# Comando usado para definir a senha como password
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

/*Comandos necessarios para fazer/rodar/usar o banco de dados*/
/*para rodar, basta selecionar a linha e apertar no icone do raio com I em cima*/

/* cria o banco de dados de nome cash , normalmente voce so usa esse na primeira vez que for usar/criar o banco de dados*/
create database cash; 
 /* indica que os proximos comandos vão ser para o banco de dados cash,SEMPRE USE ESSE COMANDO QUANDO FOR USAR O BANCO DE DADOS*/ 
use cash;

/* cria a tabela cards com as colunas codigo , nome , descricao e valor . codigo 
é a variavel (coluna) indentificador de cada elemento(linha) na tabela*/
CREATE TABLE cards(
	codigo INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	nome VARCHAR(15) NOT NULL,
    descricao VARCHAR(60) NOT NULL,
    valor FLOAT NOT NULL
);

/*COMANDO PARA INSERIR ELEMENTOS*/
/*Insere um elemento na tabela cards com as variaveis nome, descricao e valor com os respectivos valores "Agua","conta de agua",-60.00*/
insert into cards (nome,descricao,valor) values ("Agua","conta da agua",-60.00);
/*Insere um elemento na tabela cards com as variaveis nome, descricao e valor com os respectivos valores "Energia","conta de Luz",-80.50*/
insert into cards (nome,descricao,valor) values ("Energia","conta de Luz",-80.50);
/*Insere um elemento na tabela cards com as variaveis nome, descricao e valor com os respectivos valores "Venda 1","Bombom",10.50*/
insert into cards (nome,descricao,valor) values ("Venda 1","Bombom",10.50);

/*COMANDOS DE EXIBIÇÃO DA TABELA*/
/*seleciona(exibe) todos as colunas(*) de todos elementos(todas as linhas) na tabela cards*/
SELECT * FROM cards; 
/*faz o mesmo , mas apenas seleciona os elementos que possuem o valor<0*/
SELECT * FROM cards WHERE valor<0;	
/* mostra apenas as variaveis nome, descricao e valor (nao mostra o codigo)*/
SELECT nome,descricao,valor FROM cards;

/* Ignorar esses comandos abaixo
/*COMANDO PARA DELETAR ELEMENTOS*/
/* vai deletar da tabela o elemento/linha que tenha o codigo=3*/
 # DELETE FROM cards WHERE codigo = 5; 
/*TEM COMO DELETAR O BANCO DE DADOS TODO COM O SEGUINTE COMANDO,cuidado ao usar*/
#DELETE FROM cards; 
#DROP TABLE cards;