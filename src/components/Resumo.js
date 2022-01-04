import PropTypes from 'prop-types';

const Resumo = ({ nome, imagem }) => {
  return (
    <div>
      <img src={imagem} alt={nome}></img>
      <h2>{nome}</h2>
    </div>
  );
}

Resumo.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired
};

export default Resumo;
