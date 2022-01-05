import styles from './App.module.css';

const App = () => {
  const lista_repositorios = [
    {
      id: 1,
      titulo: "Titulo 1",
      descricao: "Descrição 1"
    },
    {
      id: 2,
      titulo: "Titulo 2",
      descricao: "Descrição 2"
    },
    {
      id: 3,
      titulo: "Titulo 3",
      descricao: "Descrição 3"
    },
    {
      id: 4,
      titulo: "Titulo 4",
      descricao: "Descrição 4"
    },
    {
      id: 5,
      titulo: "Titulo 5",
      descricao: "Descrição 5"
    }
  ];

  const itensRepositorio = lista_repositorios.map((item) => (
    <p className={styles["app__texto"]} key={item.id}>
      {item.id} - {item.titulo} - {item.descricao}
    </p>
  ));

  return (
    <div className={styles["app__container"]}>
      <h1 className={styles["app__titulo"]}>Meu portfólio Github</h1>
      {
        lista_repositorios.length === 0
          ? (<span>Nenhum repositório disponível.</span>)
          : (itensRepositorio)
      }
    </div>
  );
}

export default App;
