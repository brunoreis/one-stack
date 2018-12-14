import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';
import gardenerEditMutation from './GardenerEditMutation';

import apolloDecorator from '../../../../../.storybook/apolloDecorator';
import GardenerEditForm from './GardenerEditForm';

storiesOf('Gardener/Edit/Form', module)
  .addDecorator(apolloDecorator)
  .add('empty form', () => <GardenerEditForm />)
  .add('mockedProvider', () => (
    <MockedProvider
      mocks={[{
        request: {
          query: gardenerEditMutation,
          variables: {
            name: 'mocked',
            description: 'mock mock mock',
          },
        },
        result: {
          data: {
            gardener: {
              name: 'mocked',
              description: 'mock mock mock',
            },
          },
        },
      }]}
      addTypename={false}
    >
      <GardenerEditFormContainer />
    </MockedProvider>
  ));
