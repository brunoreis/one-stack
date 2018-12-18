import React from 'react';

const SearchBar = () => (
  <div className="d-flex bg-light p-2">
    <i className="fas fa-search mx-1" />
    <div className="mx-1">
      <span className="text-secondary">PESQUISAR POR: </span>
      <span className="text-primary"><strong>TODOS</strong></span>
    </div>
  </div>
);

export default SearchBar;
