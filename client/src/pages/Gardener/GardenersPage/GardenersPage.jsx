import React from 'react';
import PropTypes from 'prop-types';

import GardenerList from './GardenerList/GardenerList';
import AddButton from '../../../components/Buttons/AddButton';
import SearchBar from '../../../components/SearchBar/SearchBar';

import '../../PageStyles.css';

const GardenersPage = ({ setHeader, history }) => {
  const redirect = () => {
    console.log('pronde eu vo?');
    // history.push('gardener-details');
  };

  setHeader('JARDINEIROS');
  return (
    <div>
      <SearchBar />

      <GardenerList />

      <div className="fixed__max-width__bottom-right">
        <AddButton action={redirect} />
      </div>

    </div>
  );
};

GardenersPage.propTypes = {
  setHeader: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default GardenersPage;
