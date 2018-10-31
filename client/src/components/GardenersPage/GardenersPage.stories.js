import React from 'react';
import { storiesOf } from '@storybook/react';

import GardenersPage from './GardenersPage';

storiesOf('GardenersPage', module)
  .add('with long list', () => <GardenersPage />);
