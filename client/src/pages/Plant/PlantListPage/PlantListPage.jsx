import React from 'react';
import PropTypes from 'prop-types';

import PlantList from './PlantList/PlantList';
import AddButton from '../../../components/Buttons/AddButton';
import SearchBar from '../../../components/SearchBar/SearchBar';

import '../../PageStyles.css';

const PlantsPage = ({ setHeader }) => {
  const redirectToPlantCreatePage = () => {
    console.log('go to create plant');
  };

  setHeader('PLANTAS');
  return (
    <div>
      <SearchBar />

      <PlantList />

      <div className="fixed__max-width__bottom-right">
        <AddButton action={redirectToPlantCreatePage} />
      </div>

    </div>
  );
};

PlantsPage.propTypes = {
  setHeader: PropTypes.func.isRequired,
};

export default PlantsPage;
