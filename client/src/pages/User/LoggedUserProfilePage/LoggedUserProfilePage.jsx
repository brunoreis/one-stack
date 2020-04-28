import React from 'react';
import PropTypes from 'prop-types';

import LoggedUserProfile from './LoggedUserProfile/LoggedUserProfile';

const LoggedUserProfilePage = ({ setHeader }) => {
  setHeader('Meu Perfil');
  return <LoggedUserProfile bla={'oi'} />;
}

LoggedUserProfilePage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};

export default LoggedUserProfilePage;
