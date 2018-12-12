import React from 'react';

import GardenerCreateForm from './GardenerCreateForm/GardenerCreateForm';

const GardenerCreatePage = ({ setHeader }) => {
  setHeader('SOU NOVO');
  return <GardenerCreateForm />;
};

export default GardenerCreatePage;
