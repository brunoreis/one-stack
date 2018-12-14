import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';

import GardenerDetails from './GardenerDetails';
import loggedUserQuery from './LoggedUserQuery';
import loggedUserMock from '../../../../mocks/gardener/loggedUserMock';
import apolloDecorator from '../../../../../.storybook/apolloDecorator';

storiesOf('Gardener/Details/Details', module)
  .addDecorator(apolloDecorator)
  .add('test', () => <GardenerDetails />)
  .add('mockedProvider', () => (
    <MockedProvider
      mocks={[{
        request: { query: loggedUserQuery },
        result: { data: { loggedUser: loggedUserMock } },
      }]}
      addTypename={false}
    >
      <GardenerDetails />
    </MockedProvider>
  ));
