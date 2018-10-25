import { graphql, compose } from 'react-apollo';
import GardenersQuery from './GardenersQuery';
import GardenerList from './GardenerList';

const GardenerListContainer = compose(
  graphql(GardenersQuery, { name: 'gardenersQuery' }),
)(GardenerList);

export default GardenerListContainer;
