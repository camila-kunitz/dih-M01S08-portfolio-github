import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Resumo from './components/Resumo';
import Repositorio from './components/Repositorio';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Resumo nome="Camila Kunitz - Dev front-end" imagem="https://github.com/camila-kunitz.png" />
    <Repositorio titulo="dih-react" descricao="Este repositório possui todos exercícios e projetos do curso DevInHouse." destacar={true} />
    <Repositorio titulo="dih-javascript" descricao="Este repositório possui todos exercícios e projetos do curso DevInHouse." destacar={false} />
  </React.StrictMode>,
  document.getElementById('root')
);
