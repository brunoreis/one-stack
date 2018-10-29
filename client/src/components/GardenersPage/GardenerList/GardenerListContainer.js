import { graphql, compose } from 'react-apollo';

import GardenersQuery from './GardenersQuery';
import GardenerList from './GardenerList';

import Wrapper from './Wrapper';

const GardenerListContainer = compose(
  graphql(GardenersQuery, { name: 'gardenersQuery' }),
)(Wrapper);

export default GardenerListContainer;
