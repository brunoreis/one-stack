import { graphql, compose } from 'react-apollo';
import { withProps } from 'recompose';

import GardenerList from './GardenerList';
import GardenersQuery from './GardenersQuery';
import branchToLoading from '../../../components/ErrorAndLoading/branchToLoading';
import branchToError from '../../../components/ErrorAndLoading/branchToError';

import getConnectionNodes from '../../../helpers/getConnectionNodes';

const GardenerListContainer = compose(
  graphql(GardenersQuery, { name: 'gardenersQuery' }),
  branchToLoading({ queryName: 'gardenersQuery' }),
  branchToError({ queryName: 'gardenersQuery' }),
  withProps((
    { gardenersQuery: { gardenersConnection } },
  ) => ({ gardeners: getConnectionNodes(gardenersConnection) })),
)(GardenerList);

export default GardenerListContainer;
