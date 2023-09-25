import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Estilização do container principal
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Título principal
const Title = styled.h2``;

function App() {
  const [cards, setCards] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  // Função para buscar os cartões da API
  const getCards = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      // Ordena os cartões com base no valor (do maior para o menor)
      setCards(res.data.sort((a, b) => (a.valor < b.valor ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  // Efeito para buscar os cartões quando o componente é montado
  useEffect(() => {
    getCards();
  }, [setCards]);

  return (
    <>
      <Container>
        <Title>Easy-Cash-Flow</Title>
        {/* Componente de formulário com propriedades */}
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCards={getCards}></Form>
        {/* Componente de grade de cartões com propriedades */}
        <Grid cards={cards} setCards={setCards} setOnEdit={setOnEdit}></Grid>
      </Container>
      {/* Componente de notificações */}
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      {/* Estilo global */}
      <GlobalStyle />
    </>
  );
}

export default App;
