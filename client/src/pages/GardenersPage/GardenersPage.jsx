import React from 'react';

import GardenerList from './GardenerList/GardenerList';
import AddButton from './AddButton/AddButton';
import SearchBar from './SearchBar/SearchBar';

import '../PageStyles.css';

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

export default GardenersPage;
