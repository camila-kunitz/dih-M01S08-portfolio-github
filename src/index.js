import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Resumo from './components/Resumo';
import Repositorio from './components/Repositorio';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Resumo />
    <Repositorio />
   </React.StrictMode>,
  document.getElementById('root')
);


