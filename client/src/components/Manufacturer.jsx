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
          <div className="jumbotron text-center">
            <h1>My First Bootstrap Page</h1>
            <p>Resize this responsive page to see the effect!</p> 
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h3>Column 1</h3>
                <p>Lorem ipsum dolor..</p>
                <p>Ut enim ad..</p>
              </div>
              <div className="col-sm-4">
                <h3>Column 2</h3>
                <p>Lorem ipsum dolor..</p>
                <p>Ut enim ad..</p>
              </div>
              <div className="col-sm-4">
                <h3>Column 3</h3>
                <p>Lorem ipsum dolor..</p>
                <p>Ut enim ad..</p>
              </div>
            </div>
          </div>
        </div>
        // <div>
        //   {manufacturer.name}
        //   {manufacturer.phone}
        // </div>
      );
    }}
  </Query>
);

export default Manufacturer;
