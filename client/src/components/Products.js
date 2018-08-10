import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    products {
      useCases
      parasitoids
    }
  }
`;

class products extends Component {
  render() {
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const products = data.products;

          return (
            <div>
              {products[0].useCases}
              {products[0].parasitoids}
              {products[1].useCases}
              {products[1].parasitoids}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default products;
