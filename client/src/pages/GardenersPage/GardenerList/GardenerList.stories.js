import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';
import apolloDecorator from '../../../../.storybook/apolloDecorator';

import GardenerList from './GardenerList';
import GardenerListContainer from './GardenerListContainer';
import gardenersQuery from './GardenersQuery';
import mocked from '../../../mocks/gardener/gardenerListMock';
import results from '../../../mocks/gardener/gardenerListQueryResponseMock';


storiesOf('Gardener/List/List', module)
  .add('empty list', () => <GardenerList gardeners={[]} />)
  .add('long list', () => <GardenerList gardeners={mocked} />)
  .addDecorator(apolloDecorator)
  .add('connected to db', () => <GardenerListContainer />)
  .add('mockedProvider', () => (
    <MockedProvider
      mocks={[{
        request: { query: gardenersQuery },
        result: { data: { gardenersConnection: results } },
      }]}
      addTypename={false}
    >
      <GardenerListContainer />
    </MockedProvider>
  ));
