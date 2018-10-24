import React from 'react';
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

const Manufacturer = () => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>;
      if (error) return <div>Error</div>;

      const { manufacturer } = data;

      return (
        <div>
          {manufacturer.name}
          {manufacturer.phone}
        </div>
      );
    }}
  </Query>
);

export default Manufacturer;
