import React from 'react';

import './styles.css';
import GardenerList from './GardenerList/GardenerList';
import mocks from './GardenerList/mocks/mocks';

import AddButton from './AddButton/AddButton';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import SearchBar from './SearchBar/SearchBar';

const GardenersPage = () => (
  <div className="gardeners-page">

    <Header text="JARDINEIROS" />

    <div>
      <SearchBar />
      <GardenerList gardeners={mocks.longList} />
    </div>

    <div className="gardeners-page__bottom-fixed-flex">
      <div className="gardeners-page__add-button">
        <AddButton />
      </div>
      <Footer />
    </div>

  </div>
);

export default GardenersPage;
