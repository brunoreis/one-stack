import React from 'react';
import PropTypes from 'prop-types';
import noUserIcon from '../../../../images/no-user-icon.png';

const GardenerDetails = ({
  name,
  picture,
  description,
}) => (
  <div className="container">
    <img
      style={{
        height: '180px',
      }}
      src={picture || noUserIcon}
      alt="user profile"
    />

    <div className="h4">
      {name}
    </div>

    <div className="text-primary">
      Breve descrição:
    </div>
    {description}

    <div className="text-primary">
      Seus jardins:
    </div>

    <div className="row">
      <div className="col">Jardim 1</div>
      <div className="col">Jardim 2</div>
      <div className="col">Jardim 3</div>
      <div className="col">Jardim 4</div>
      <div className="col">Jardim 5</div>
      <div className="col">Jardim 6</div>
      <div className="col">Jardim 7</div>
      <div className="col">Jardim 8</div>
    </div>

    <div className="text-primary">
      Receitas:
    </div>

    <div>Receita1</div>
    <div>Receita2</div>
    <div>Receita3</div>

    <div style={{ height: '50px' }} />

  </div>
);

GardenerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  description: PropTypes.string,
};

GardenerDetails.defaultProps = {
  picture: '',
  description: '',
};

export default GardenerDetails;
