import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GardenerCreatePage from './GardenerCreatePage';

storiesOf('GardenerCreatePage', module)
  .add('empty form', () => <GardenerCreatePage />);
