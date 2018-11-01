import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';
import apolloDecorator from '../../../../.storybook/apolloDecorator';

import GardenerList from './GardenerList';
import GardenerListContainer from './GardenerListContainer';
import gardenersQuery from './GardenersQuery';
import mocked from './mocks/mocks';
import results from './mocks/queryResults';


storiesOf('GardenerList', module)
  .add('empty list', () => <GardenerList gardeners={mocked.emptyList} />)
  .add('long list', () => <GardenerList gardeners={mocked.longList} />)
  .addDecorator(apolloDecorator)
  .add('connected to db', () => <GardenerListContainer />)
  .add('mockedProvider', () => (
    <MockedProvider
      mocks={[{
        request: { query: gardenersQuery },
        result: { data: { gardenersConnection: results.dataResponse } },
      }]}
      addTypename={false}
    >
      <GardenerListContainer />
    </MockedProvider>
  ));
