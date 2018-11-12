import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import SendButton from '../../../components/SendButton/SendButton';

const GardenerEditForm = ({
  name,
  setName,
  description,
  setDescription,
  validation,
  submit,
}) => (
  <div className="gardener-edit-form common__fonts__normal">

    <div className="gardener-edit-form__form-item">
      <div>Nome Completo*</div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {validation.name.isInvalid
      && (
      <div className="gardener-edit-form__form-item__error">
        {validation.name.message}
      </div>
      )}
    </div>

    <div className="gardener-edit-form__form-item">
      <div>Breve descrição</div>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </div>

    <div className="gardener-edit-form__form-item">
      <SendButton
        onClick={submit}
      />
    </div>

  </div>
);

GardenerEditForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  validation: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
};

export default GardenerEditForm;
