import React from 'react';
import { storiesOf } from '@storybook/react';

import GardenersPage from './GardenersPage';

storiesOf('Gardener/List/Page', module)
  .add('with long list', () => <GardenersPage />);
