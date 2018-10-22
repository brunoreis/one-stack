import React from 'react';

import './styles.css';

const HomeButton = () => (
  <div
    className="home-button__container"
    onClick={() => console.log('go to home')}
  >
    <div className="home-button__icon" />
  </div>
);

export default HomeButton;
