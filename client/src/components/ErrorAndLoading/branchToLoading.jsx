import React from 'react';
import { branch, renderComponent } from 'recompose';

export default ({ queryName }) => branch(
  props => props[queryName].loading,
  renderComponent(
    () => <div>Fetching...</div>,
  ),
);
