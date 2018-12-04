import React from 'react';
import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GardenerEditForm from './GardenerEditForm/GardenerEditForm';

const GardenerEditPage = () => (
  <div className="gardener-edit-page">
    <Header text="MEU  PERFIL" />
    <GardenerEditForm />
    <div className="gardener-edit-page__bottom-fixed-flex">
      <Footer />
    </div>
  </div>
);

export default GardenerEditPage;
