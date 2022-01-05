import PropTypes from 'prop-types';
import styles from './Repositorio.module.css';

const Repositorio = ({ titulo, descricao, destacar }) => {
  return (
    <article className={styles["repositorio__container"]}>
      <div>
        <h3 className={styles["repositorio__titulo"]}>{titulo}</h3>
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