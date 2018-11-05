import React from 'react';
import { storiesOf } from '@storybook/react';

import apolloDecorator from '../../../.storybook/apolloDecorator';
import GardenerDetailsPage from './GardenerDetailsPage';

storiesOf('Gardener/Details/Page', module)
  .addDecorator(apolloDecorator)
  .add('connected', () => <GardenerDetailsPage />);
