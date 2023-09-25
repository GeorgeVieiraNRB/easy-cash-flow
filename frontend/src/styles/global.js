import { createGlobalStyle } from "styled-components";

// Cria um estilo global que será aplicado a todos os elementos
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #B4D2E7;
  }
`;

export default GlobalStyle;