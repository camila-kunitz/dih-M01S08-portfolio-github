import PropTypes from 'prop-types';
import styles from './Repositorio.module.css';

const Repositorio = ({ titulo, descricao, destacar }) => {
  return (
    <article className={
      destacar
        ? styles["repositorio__container-destaque"]
        : styles["repositorio__container"]
    }>
      <div className={styles["repositorio__titulo"]}>
        <h3>{titulo}</h3>
        {
          destacar ? (<span>projeto em destaque!!</span>) : null
        }
      </div>
      <p className={styles["repositorio__descricao"]}>{descricao}</p>
    </article>
  )
}

Repositorio.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  destacar: PropTypes.bool
};

export default Repositorio;