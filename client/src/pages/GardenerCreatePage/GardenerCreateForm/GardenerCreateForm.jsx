import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import SendButton from './SendButton/SendButton';

const GardenerCreateForm = ({
  name,
  setName,
  description,
  setDescription,
  email,
  setEmail,
  password,
  setPassword,
  submit,
}) => (
  <div className="gardener-create-form common__fonts__normal">

    <div className="gardener-create-form__form-item">
      <div>Nome Completo*</div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>

    <div className="gardener-create-form__form-item">
      <div>Breve descrição</div>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </div>

    <div className="gardener-create-form__form-item">
      <div className="gardener-create-form__bold-text">
        DADOS DE LOGIN
      </div>
    </div>

    <div className="gardener-create-form__form-item">
      <div>Email*</div>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </div>

    <div className="gardener-create-form__form-item">
      <div>Senha de acesso*</div>
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>

    <div className="gardener-create-form__form-item">
      <SendButton
        onClick={submit}
      />
    </div>

  </div>
);

GardenerCreateForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default GardenerCreateForm;
