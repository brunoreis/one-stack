import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MockedProvider } from 'react-apollo/test-utils';
import gql from 'graphql-tag';
import gardenersQuery from './GardenersQuery';

import GardenerList from './GardenerList';
import GardenerListContainer from './GardenerListContainer';
import mocked from './mocks';

import apolloDecorator from '../../../../.storybook/apolloDecorator';

const mocks = [{
  request: {
    query: gardenersQuery,
    variables: {},
    // query: gql`
    // query gardenersConnection {
    //   totalCount
    //   edges {
    //     cursor
    //     node {
    //       id
    //       name
    //       description
    //       gardensConnection {
    //         edges {
    //           node {
    //             id
    //             name
    //           }
    //         }
    //       }
    //       recipesConnection {
    //         totalCount
    //       }
    //     }
    //   }
    // }
    // `,
  },
  result: {
    gardenersConnection: {
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
        },
      }],
    },
  },
}];

storiesOf('GardenerList', module)
  .add('empty list', () => <GardenerList gardeners={mocked.emptyList} />)
  .add('long list', () => <GardenerList gardeners={mocked.longList} />)
  .addDecorator(apolloDecorator)
  .add('connected', () => <GardenerListContainer />);
  // .add('mocked provider', () => (
  //   <MockedProvider mocks={[]} addTypename={false}>
  //     <GardenerListContainer />
  //   </MockedProvider>
  // ));
