import styles from './App.module.css';
import Resumo from './components/Resumo';
import Repositorio from './components/Repositorio';

const App = () => {
  const lista_repositorios = [
    {
      id: 1,
      titulo: "Projeto 1",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.",
      destacar: true
    },
    {
      id: 2,
      titulo: "Projeto 2",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.",
      destacar: false
    },
    {
      id: 3,
      titulo: "Projeto 3",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.",
      destacar: false
    },
    {
      id: 4,
      titulo: "Projeto 4",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.",
      destacar: false
    },
    {
      id: 5,
      titulo: "Projeto 5",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis.",
      destacar: false
    }
  ];

  const itensRepositorio = lista_repositorios.map((item) => (
    <Repositorio key={item.id} titulo={item.titulo} descricao={item.descricao} destacar={item.destacar} />
  ));

  return (
    <div className={styles["app__container"]}>
      <h1 className={styles["app__titulo"]}>Meu portfólio Github</h1>

      <div>
        <Resumo nome="Camila Kunitz - Dev front-end" imagem="https://github.com/camila-kunitz.png" />

        <section>
          {
            lista_repositorios.length === 0
              ? (<span>Nenhum repositório disponível.</span>)
              : (itensRepositorio)
          }
        </section>
      </div>
    </div>
  );
}

export default App;
