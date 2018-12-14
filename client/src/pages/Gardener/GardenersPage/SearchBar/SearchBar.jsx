import React from 'react';
import SearchIcon from '../SearchIcon/SearchIcon';

import './styles.css';

const SearchBar = () => (
  <div className="gardeners-page__search-bar">
    <SearchIcon />
    <div className="gardeners-page__search-bar__text">
        PESQUISAR POR: TODOS
    </div>
  </div>
);

export default SearchBar;
