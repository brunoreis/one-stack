import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import noUserIcon from '../../../images/no-user-icon.png';
import LOGGED_USER_QUERY from './LoggedUserQuery';

import ErrorHandler from '../../../components/ErrorAndLoading/ErrorHandler';
import './styles.css';

const GardenerDetails = () => {
  const { loading, error, data } = useQuery(
    LOGGED_USER_QUERY,
    { suspend: false },
  );
  if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  const { name, description, picture } = data.loggedUser.gardener;
  return (
    <div className="gardener-details common__fonts__normal">

      <div className="gardener-details__picture">
        <img
          className="gardener__picture"
          src={picture || noUserIcon}
          alt="no pic"
        />
      </div>

      <div className="gardener-details__name gardener-details__item">
        {name}
      </div>

      <div className="gardener-details__description gardener-details__item">
        <div className="common__fonts__topic">
          Breve descrição:
        </div>
        <div>
          {description}
        </div>
      </div>

      <div className="gardener-details__gardens gardener-details__item">
        <div className="common__fonts__topic">
          Seus jardins:
        </div>
        <div className="gardener-details__gardens__list">
          <div style={{ margin: '10px' }}>Jardim 1</div>
          <div style={{ margin: '10px' }}>Jardim 2</div>
          <div style={{ margin: '10px' }}>Jardim 3</div>
          <div style={{ margin: '10px' }}>Jardim 4</div>
          <div style={{ margin: '10px' }}>Jardim 5</div>
          <div style={{ margin: '10px' }}>Jardim 6</div>
          <div style={{ margin: '10px' }}>Jardim 7</div>
          <div style={{ margin: '10px' }}>Jardim 8</div>
        </div>
        {/* <Gardens /> */}
      </div>

      <div className="gardener-details__recipes gardener-details__item">
        <div className="common__fonts__topic">
          Receitas:
        </div>
        <div style={{ marginTop: '6px', marginBottom: '6px' }}>Receita1</div>
        <div style={{ marginTop: '6px', marginBottom: '6px' }}>Receita2</div>
        <div style={{ marginTop: '6px', marginBottom: '6px' }}>Receita3</div>
        {/* <Recipes /> */}
      </div>

    </div>

  );
};

export default GardenerDetails;
