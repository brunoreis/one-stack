import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GardenerCreateFormContainer from './GardenerCreateForm/GardenerCreateFormContainer';
import fetchLogin from '../../components/auth/Login/fetchLogin';

const GardenerCreatePage = ({ history }) => {
  const loginNewUser = async (email, password) => {
    await fetchLogin(email, password);
    history.push('gardener-details');
  };

  return (
    <div className="gardener-create-page">
      <Header text="SOU NOVO" />
      <GardenerCreateFormContainer loginNewUser={loginNewUser} />
      <div className="gardener-create-page__bottom-fixed-flex">
        <Footer />
      </div>
    </div>
  );
};

GardenerCreatePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default GardenerCreatePage;
