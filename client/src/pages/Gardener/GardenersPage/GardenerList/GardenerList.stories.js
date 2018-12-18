import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';

import GardenerList from './GardenerList';
import gardenersQuery from './GardenersQuery';
import results from '../../../../mocks/gardener/gardenerListQueryResponseMock';


storiesOf('Gardener/List/List', module)
  .add('mockedProvider', () => (
    <MockedProvider
      mocks={[{
        request: { query: gardenersQuery },
        result: { data: { gardenersConnection: results } },
      }]}
      addTypename={false}
    >
      <GardenerList />
    </MockedProvider>
  ));
