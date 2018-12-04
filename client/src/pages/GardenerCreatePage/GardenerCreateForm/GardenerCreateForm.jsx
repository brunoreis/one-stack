import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import './styles.css';

import SendButton from '../../../components/SendButton/SendButton';

import GARDENER_CREATE_MUTATION from './GardenerCreateMutation';
import fetchLogin from '../../../helpers/fetchLogin';
import validator from './GardenerCreateFormValidator';

const GardenerCreateForm = ({ history }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState(validator.valid());

  const gardenerCreateMutation = useMutation(
    GARDENER_CREATE_MUTATION,
    {
      variables: {
        email,
        password,
        name,
        description,
      },
    },
  );

  const submit = async () => {
    const newValidation = validator.validate({
      email,
      password,
      name,
      description,
    });
    if (newValidation.isValid) {
      const res = await gardenerCreateMutation();
      if (res.data && res.data.createUser) {
        await fetchLogin(email, password);
        history.push('gardener-details');
      } else {
        console.log('erro ao criar usuário');
      }
    } else setValidation(newValidation);
  };

  return (
    <div className="gardener-create-form common__fonts__normal">

      <div className="gardener-create-form__form-item">
        <div>Nome Completo*</div>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {validation.name.isInvalid
        && (
        <div className="gardener-create-form__form-item__error">
          {validation.name.message}
        </div>
        )}
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
        {validation.email.isInvalid
        && (
        <div className="gardener-create-form__form-item__error">
          {validation.email.message}
        </div>
        )}
      </div>

      <div className="gardener-create-form__form-item">
        <div>Senha de acesso*</div>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {validation.password.isInvalid
        && (
        <div className="gardener-create-form__form-item__error">
          {validation.password.message}
        </div>
        )}
      </div>

      <div className="gardener-create-form__form-item">
        <SendButton
          onClick={submit}
        />
      </div>

    </div>
  );
};

GardenerCreateForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(GardenerCreateForm);
