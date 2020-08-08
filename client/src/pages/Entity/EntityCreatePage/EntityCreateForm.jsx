import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bulma-components';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import {
  GoogleApiWrapper,
  Map,
} from 'google-maps-react';
import Geocode from 'react-geocode';

import validator from './EntityCreateFormValidator';
import ENTITY_CREATE_MUTATION from './ENTITY_CREATE_MUTATION';
import { defaultCoordinates, googleApiKey } from '../../../config';

Geocode.setApiKey(googleApiKey);
Geocode.setLanguage('pt-BR');
Geocode.setRegion('br');

const { Field, Input, Control, Label } = Form;

const EntityCreateForm = ({
  google,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [coordinates, setCoordinates] = useState();
  const [address, setAddress] = useState();
  const [validation, setValidation] = useState(validator.valid());

  useEffect( // update address when coordinates change
    () => {
      async function getAddress() {
        let result;
        try {
          result = await Geocode.fromLatLng(coordinates.lat, coordinates.lng); // will fail: unauthorized API
        } catch (e) {
          console.log(e);
        }
        if (result) {
          // TODO: parse intro address
          setAddress(result);
        }
      }
      if (coordinates) { getAddress(); }
    },
    [coordinates?.lat, coordinates?.lng],
  );

  const history = useHistory();

  const [entityCreateMutation] = useMutation(
    ENTITY_CREATE_MUTATION,
    {
      variables: {
        input: {
          name,
          description,
          latitude: coordinates?.lat,
          longitude: coordinates?.lng,
        },
      },
    },
  );

  const validate = () => validator.validate({
    name,
    description,
    latitude: coordinates?.lat || '',
    longitude: coordinates?.lng || '',
  });

  const submit = () => entityCreateMutation();

  const validateAndSubmit = async () => {
    const newValidation = validate();
    if (newValidation.isValid) {
      try {
        await submit();
      } catch (e) {
        console.log(e);
      }
      history.push('/');
    } else {
      setValidation(newValidation);
    }
  };

  const getCoordinates = async (_, __, event) => {
    console.log('getCoordinates ', event);
    setCoordinates({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <div>
      <Field>
        <Control>
          <Label>Nome</Label>
          <Input
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {validation.name.isInvalid && (
            <div className='has-text-danger m'>
              {validation.name.message}
            </div>
          )}
        </Control>
      </Field>
      <Field>
        <Control>
          <Label>Descrição</Label>
          <Input
            placeholder='Description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Control>
      </Field>

      <Field>
        <Label>Endereço</Label>
        <Control>
          <Input
            value={address}
            readOnly
          />
        </Control>
      </Field>

      <Field kind='group'>
        <Control>
          <Label>Latitude</Label>
          <Input
            value={coordinates?.lat}
            readOnly
          />
        </Control>

        <Control>
          <Label>Longitude</Label>
          <Input
            value={coordinates?.lng}
            readOnly
          />
        </Control>
      </Field>
      {(validation.latitude.isInvalid || validation.longitude.isInvalid) && (
        <div className='has-text-danger mb-3' style={{ marginTop: '-0.75rem' }}>
          {validation.latitude.message}
        </div>
      )}

      <Map
        style={{ marginBottom: '0.75rem' }}
        onClick={getCoordinates}
        google={google}
        zoom={11}
        initialCenter={defaultCoordinates}
        containerStyle={{
          position: 'relative',
          minWidth: '300px',
          minHeight: '300px',
        }}
      />

      <Field kind='group'>
        <Control>
          <Button
            color='link'
            onClick={validateAndSubmit}
          >
            Submit
          </Button>
        </Control>

        <Control>
          <Button
            className='is-link is-light'
          >
            Cancel
          </Button>
        </Control>
      </Field>
    </div>
  );
};

EntityCreateForm.propTypes = {
  google: PropTypes.object.isRequired,
};

export default GoogleApiWrapper({
  apiKey: googleApiKey,
})(EntityCreateForm);
