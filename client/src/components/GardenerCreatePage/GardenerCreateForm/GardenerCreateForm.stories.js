import React from 'react';
import { storiesOf } from '@storybook/react';

import GardenerCreateFormContainer from './GardenerCreateFormContainer';

storiesOf('GardenerCreateForm', module)
  .add('empty form', () => <GardenerCreateFormContainer />);
