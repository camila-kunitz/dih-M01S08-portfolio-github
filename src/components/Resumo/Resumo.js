import PropTypes from 'prop-types';
import styles from './Resumo.module.css';

const Resumo = ({ nome, imagem }) => {
  return (
    <div className={styles["resumo__container"]}>
      <img className={styles["resumo__imagem"]} src={imagem} alt={nome}></img>
      <h2 className={styles["resumo__nome"]}>{nome}</h2>
    </div>
  );
}

Resumo.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired
};

export default Resumo;
