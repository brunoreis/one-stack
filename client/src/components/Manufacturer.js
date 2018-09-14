import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    manufacturer {
      name
      phone
    }
  }
`;

class Manufacturer extends Component {
  render() {
    console.log(process.env);
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const manufacturer = data.manufacturer;

          return (
            <div>
              {manufacturer.name}
              {manufacturer.phone}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Manufacturer;
