import React from 'react';
import { storiesOf } from '@storybook/react';

import { MockedProvider } from 'react-apollo/test-utils';
import gql from 'graphql-tag';
import gardenersQuery from './GardenersQuery';

import GardenerList from './GardenerList';
import GardenerListContainer from './GardenerListContainer';
import mocked from './mocks';

import apolloDecorator from '../../../../.storybook/apolloDecorator';


const resultData = {
  totalCount: 1,
  edges: [{
    cursor: '1',
    node: {
      id: 1,
      name: 'mockmock',
      description: 'olá',
      gardenersConnection: {
        edges: {
          node: {
            id: 3,
            name: 'bla',
          },
        },
      },
      recipesConnection: {
        totalCount: 3,
      },
      gardensConnection: {
        totalCount: 0,
        edges: [],
      },
    },
  }],
};

storiesOf('GardenerList', module)
  .add('empty list', () => <GardenerList gardeners={mocked.emptyList} />)
  .add('long list', () => <GardenerList gardeners={mocked.longList} />)
  .addDecorator(apolloDecorator)
  .add('connected', () => <GardenerListContainer />)
  .add('mocked loading', () => (
    <MockedProvider mocks={[{ request: { query: gardenersQuery } }]} addTypename={false}>
      <GardenerListContainer />
    </MockedProvider>
  ))
  .add('mocked data', () => (
    <MockedProvider
      mocks={[{
        request: { query: gardenersQuery },
        result: { data: { gardenersConnection: resultData } },
      }]}
      addTypename={false}
    >
      <GardenerListContainer />
    </MockedProvider>
  ));
