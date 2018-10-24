import React from 'react';

import './styles.css';
import RecipesButton from './RecipesButton/RecipesButton';
import GardenerButton from './GardenerButton/GardenerButton';
import GardensButton from './GardensButton/GardensButton';
import PlantsButton from './PlantsButton/PlantsButton';
import HomeButton from './HomeButton/HomeButton';

const Footer = () => (
  <div className="footer">
    <RecipesButton />
    <GardenerButton />
    <HomeButton />
    <GardensButton />
    <PlantsButton />
  </div>
);

export default Footer;
