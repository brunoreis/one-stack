import React/* , { Suspense } */ from 'react';
import { useQuery } from 'react-apollo-hooks';

import noUserIcon from '../../../images/no-user-icon.png';
import LOGGED_USER_QUERY from './LoggedUserQuery';

import ErrorHandler from '../../../components/ErrorAndLoading/ErrorHandler';

const GardenerDetails = () => {
  const queryResult = useQuery(
    LOGGED_USER_QUERY,
    {
      suspend: false,
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  );
  const {
    loading,
    error,
    errors,
    data,
  } = queryResult;

  if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  if (errors) return <ErrorHandler error={{ graphQLErrors: errors }} />;

  const { name, description, picture } = data.loggedUser.gardener;
  return (
    <div className="container">
      <img
        style={{
          height: '180px',
        }}
        src={picture || noUserIcon}
        alt="user profile"
      />

      <div className="h4">
        {name}
      </div>

      <div className="text-primary">
        Breve descrição:
      </div>
      {description}

      <div className="text-primary">
        Seus jardins:
      </div>

      <div className="row">
        <div className="col">Jardim 1</div>
        <div className="col">Jardim 2</div>
        <div className="col">Jardim 3</div>
        <div className="col">Jardim 4</div>
        <div className="col">Jardim 5</div>
        <div className="col">Jardim 6</div>
        <div className="col">Jardim 7</div>
        <div className="col">Jardim 8</div>
      </div>

      <div className="text-primary">
        Receitas:
      </div>

      <div>Receita1</div>
      <div>Receita2</div>
      <div>Receita3</div>

    </div>
  );
};

export default GardenerDetails;
// export default () => (
//   <Suspense fallback={<div>Loading...</div>}>
//     <GardenerDetails />
//   </Suspense>
// );
