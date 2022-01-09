import styles from './App.module.css';
import Resumo from './components/Resumo/Resumo';
import Repositorio from './components/Repositorio/Repositorio';
import { useState, useEffect } from 'react';
import { mapToRepoObject } from './data/data-utils';

const App = () => {
  const [repositorios, setRepositorios] = useState([]);
  const [idSelecionado, setIdSelecionado] = useState(0);
  const [nomeUsuario, setNomeUsuario] = useState('');

  const handleNomeUsuario = (nome) => {
    setNomeUsuario(nome);
  };

  const consultaApi = () => {
    fetch('https://api.github.com/users/camila-kunitz/repos')
      .then((response) => response.json())
      .then((resultado) => {
        const resultadoMapeado = mapToRepoObject(resultado);
        setRepositorios(resultadoMapeado);
      });
  };

  useEffect(() => {
    consultaApi();
  }, []);

  const itensRepositorio = repositorios.map((item) => (
    <Repositorio
      key={item.id}
      titulo={item.titulo}
      descricao={item.descricao}
      destacar={item.id === idSelecionado}
    />
  ));

  return (
    <div className={styles['app__container']}>
      <h1 className={styles['app__titulo']}>Meu portfólio Github</h1>

      <div>
        <Resumo
          nome="Camila Kunitz - Dev front-end"
          imagem="https://github.com/camila-kunitz.png"
        />

        <div>
          <input
            type="text"
            value={nomeUsuario}
            onChange={({ target }) => handleNomeUsuario(target.value)}
          />
          <button>Buscar</button>
        </div>

        <section>
          {repositorios.length === 0 ? (
            <span>Nenhum repositório disponível.</span>
          ) : (
            itensRepositorio
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
