import React from 'react';
import PropTypes from 'prop-types';

import GardenerList from './GardenerList/GardenerList';
import AddButton from '../../../components/Buttons/AddButton';
import SearchBar from '../../../components/SearchBar/SearchBar';

import '../../PageStyles.css';

const GardenersPage = ({ setHeader }) => {
  setHeader('JARDINEIROS');
  return (
    <div>
      <SearchBar />

      <GardenerList />

      <div className="fixed__max-width__bottom-right">
        <AddButton />
      </div>

    </div>
  );
};

GardenersPage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};

export default GardenersPage;
