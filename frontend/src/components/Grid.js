import React from "react";
import axios from "axios";
import { styled, css } from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

// Estilização da tabela e suas colunas
const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ cards, setCards, setOnEdit }) => {
  // Função para lidar com a edição de um item
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  // Função para lidar com a exclusão de um item
  const handleDelete = async (codigo) => {
    await axios
      .delete("http://localhost:8800/" + codigo)
      .then(({ data }) => {
        // Filtra os cartões excluindo aquele com o código especificado
        const newArray = cards.filter((card) => card.codigo !== codigo);

        // Atualiza o estado dos cartões
        setCards(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    // Remove o estado de edição
    setOnEdit(null);
  };

  // Calcula o valor total somando os valores de todos os cartões
  const totalValue = cards.reduce((total, item) => total + item.valor, 0);
  // Definições do formato do valor
  const options = {
    style: 'currency', // Define o estilo como "currency" para formatar como moeda
    currency: 'BRL',   // Define a moeda como Real Brasileiro
    minimumFractionDigits: 2, // Especifica o número mínimo de casas decimais
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th onlyWeb>Descrição</Th>
          <Th>Valor</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {cards.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="40%">{item.descricao}</Td>
            <Td width="20%" color={item.valor < 0 ? "red" : "green"}>
              {item.valor.toLocaleString('pt-BR', options) }
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.codigo)} />
            </Td>
          </Tr>
        ))}
        <Tr>
          <Td>Total:</Td>
          <Td colSpan="1"></Td>
          <Td color={totalValue < 0 ? "red" : "green"}>{totalValue.toLocaleString('pt-BR', options)}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Grid;
