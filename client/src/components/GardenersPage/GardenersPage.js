import React from 'react';

import './styles.css';
import GardenerList from './GardenerList/GardenerList';
import mocks from './GardenerList/mocks';

import AddButton from './AddButton/AddButton';
import Footer from '../Footer/Footer';

const GardenersPage = () => (
  <div className="gardeners-page__container">

    <div className="gardeners-page__header">
      <div className="gardeners-page__header__text">
        JARDINEIROS
      </div>
    </div>

    <div className="gardeners-page__gardener-list__container">
      <GardenerList gardeners={mocks.longList} />
    </div>

    <div className="gardeners-page__bottom-fixed__container">
      <div className="gardeners-page__add-button">
        <AddButton />
      </div>
      <Footer />
    </div>

  </div>
);

export default GardenersPage;
