import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Resumo from './components/Resumo';
import Repositorio from './components/Repositorio';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Resumo nome="Imagem Aleatória 1" imagem="https://picsum.photos/200/300" />
    <Repositorio titulo="DIH - React" descricao="Este repositório possui todos exercícios e projetos do curso DevInHouse" destacar={true} />
  </React.StrictMode>,
  document.getElementById('root')
);
