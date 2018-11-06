import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';

import GardenerDetails from './GardenerDetails';
import GardenerDetailsContainer from './GardenerDetailsContainer';
import loggedUserQuery from './LoggedUserQuery';
import gardenerMocks from '../../../mocks/gardener/gardenerMocks';
import loggedUserMock from '../../../mocks/gardener/loggedUserMock';
import apolloDecorator from '../../../../.storybook/apolloDecorator';

storiesOf('Gardener/Details/Details', module)
  .add('test', () => <GardenerDetails {...gardenerMocks.longDescription} />)
  .addDecorator(apolloDecorator)
  .add('container', () => <GardenerDetailsContainer />)
  .add('mockedProvider', () => (
    <MockedProvider
      mocks={[{
        request: { query: loggedUserQuery },
        result: { data: { loggedUser: loggedUserMock } },
      }]}
      addTypename={false}
    >
      <GardenerDetailsContainer />
    </MockedProvider>
  ));
