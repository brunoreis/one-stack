import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import fetchLogout from './fetchLogout';

const Logout = (props) => {
  const {
    fetched,
    setFetched,
  } = props;

  fetchLogout().then(() => {
    setFetched(true);
  });

  return (
    !fetched
      ? <div> fetching... </div>
      : <Redirect to="/" />
  );
};

Logout.propTypes = {
  fetched: PropTypes.bool.isRequired,
  setFetched: PropTypes.func.isRequired,
};

export default Logout;
