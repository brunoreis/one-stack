import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

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
    <form className="container">

      <div className="form-group">
        <label htmlFor="name">Nome Completo*</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {validation.name.isInvalid
        && (
        <div className="text-danger">
          {validation.name.message}
        </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description">Breve descrição</label>
        <textarea
          className="form-control"
          type="text"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <h5><strong>DADOS DE LOGIN</strong></h5>

      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          className="form-control"
          type="text"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {validation.email.isInvalid
        && (
        <div className="text-danger">
          {validation.email.message}
        </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha de acesso*</label>
        <input
          className="form-control"
          type="text"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {validation.password.isInvalid
        && (
        <div className="text-danger">
          {validation.password.message}
        </div>
        )}
      </div>

      <div className="row">
        <button
          className="btn btn-primary btn-lg mx-auto"
          type="button"
          onClick={submit}
        >
          Salvar
        </button>
      </div>

    </form>
  );
};

GardenerCreateForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(GardenerCreateForm);
