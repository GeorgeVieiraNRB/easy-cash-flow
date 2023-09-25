import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Cria uma raiz de renderização no elemento com o ID 'root' no documento HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro de um modo de "Strict Mode"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
