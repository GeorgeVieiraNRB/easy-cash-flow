import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

// Definição dos estilos das tags criadas para o formulário
const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getCards, onEdit, setOnEdit }) => {
  const ref = useRef();

  // Atualiza os campos do formulário quando um cartão é editado
  useEffect(() => {
    if (onEdit) {
      const card = ref.current;

      card.nome.value = onEdit.nome;
      card.descricao.value = onEdit.descricao;
      card.valor.value = onEdit.valor;
    }
  }, [onEdit]);

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    const card = ref.current;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!card.nome.value || !card.valor.value) {
      return toast.warn("Preencha todos os campos, por favor.");
    }

    if (onEdit) {
      // Atualiza um cartão existente
      await axios
        .put("http://localhost:8800/" + onEdit.codigo, {
          nome: card.nome.value,
          descricao: card.descricao.value,
          valor: parseFloat(card.valor.value),
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      // Cria um novo cartão
      await axios
        .post("http://localhost:8800/", {
          nome: card.nome.value,
          descricao: card.descricao.value,
          valor: parseFloat(card.valor.value),
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    // Limpa os campos do formulário e atualiza a lista de cartões
    card.nome.value = "";
    card.descricao.value = "";
    card.valor.value = "";

    setOnEdit(null);
    getCards();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label for="nome">Nome</Label>
        <Input name="nome" placeholder="Gás de cozinha" />
      </InputArea>
      <InputArea>
        <Label for="descricao">Descrição</Label>
        <Input name="descricao" placeholder="Alta no gás" />
      </InputArea>
      <InputArea>
        <Label for="valor">Valor{" (R$)"}</Label>
        <Input name="valor" placeholder="-180.00" />
      </InputArea>
      <Button type="submit">Salvar</Button>
      <Button type="reset">Limpar</Button>
    </FormContainer>
  );
};

export default Form;
