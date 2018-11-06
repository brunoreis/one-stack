import { graphql, compose } from 'react-apollo';
import { withProps } from 'recompose';
import LoggedUserQuery from './LoggedUserQuery';
import GardenerDetails from './GardenerDetails';
import branchToLoading from '../../../components/ErrorAndLoading/branchToLoading';
import branchToError from '../../../components/ErrorAndLoading/branchToError';

const GardenerDetailsContainer = compose(
  graphql(LoggedUserQuery, { name: 'loggedUserQuery' }),
  branchToLoading({ queryName: 'loggedUserQuery' }),
  branchToError({ queryName: 'loggedUserQuery' }),
  withProps(({ loggedUserQuery: { loggedUser: { gardener } } }) => gardener),
)(GardenerDetails);

export default GardenerDetailsContainer;
