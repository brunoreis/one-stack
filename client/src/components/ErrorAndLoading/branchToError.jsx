import React from 'react';
import { branch, renderComponent } from 'recompose';

import ErrorHandler from './ErrorHandler';

export default ({ queryName }) => branch(
  props => props[queryName].error,
  renderComponent(
    props => <ErrorHandler error={props[queryName].error} />,
  ),
);
