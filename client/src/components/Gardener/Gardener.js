import React from 'react';

import './styles/styles.css';
import './styles/fonts.css';
import gardener from './mocks';

const Gardener = () => (
  <div className="GardenerContainer">
    <img
      className="GardenerPicture"
      src={gardener.picture}
      alt="https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png"
    />
    <div className="GardenerName GardenerNameFont">
      {gardener.name}
    </div>
    <div className="GardenerText GardenerTextFont">
      {gardener.text}
    </div>
    <div className="GardenerGardens GardenerTextFont">
      <span className="GardenerTextFontGray">
        JARDINS:
        {' '}
      </span>
      {gardener.gardens.map(garden => (
        <span className="GardenerGardensFont" key={garden.id}>
          {garden.name}
          {', '}
        </span>
      ))}
    </div>
    {/* <div className="GardenerRecipes">
      {gardener.recipes.length}
    </div> */}
  </div>
);

export default Gardener;
