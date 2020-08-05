import React, { useState } from 'react';
import { Form } from 'react-bulma-components';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import validator from './EntityCreateFormValidator';
import ENTITY_CREATE_MUTATION from './ENTITY_CREATE_MUTATION';

const { Field, Input, Control, Label } = Form;

const EntityCreateForm = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const history = useHistory();

  const [entityCreateMutation] = useMutation(
    ENTITY_CREATE_MUTATION,
    {
      variables: {
        input: {
          name,
          description,
        },
      },
    },
  );

  const validate = () => validator.validate({
    name,
    description,
  });

  const submit = () => entityCreateMutation();

  const validateAndSubmit = async () => {
    const validation = validate();
    if (validation.isValid) {
      console.log('valid');
      try {
        await submit();
      } catch (e) {
        console.log(e);
      }
      history.push('/');
    } else {
      console.log('invalid');
    }
  };

  return (
    <div>
      <Field>
        <Label>name (wrapped)</Label>
        <Control>
          <Input
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Control>
      </Field>
      <div className='field'>
        <label className='label'>description (raw)</label>
        <div className='control'>
          <input
            className='input'
            placeholder='Description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          <button
            type='button'
            className='button is-link'
            onClick={validateAndSubmit}
          >
            Submit
          </button>
        </div>
        <div className='control'>
          <button
            type='button'
            className='button is-link is-light'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntityCreateForm;
