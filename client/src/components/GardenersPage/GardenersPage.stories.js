import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GardenersPage from './GardenersPage';

storiesOf('GardenersPage', module)
  .add('with long list', () => <GardenersPage />);
