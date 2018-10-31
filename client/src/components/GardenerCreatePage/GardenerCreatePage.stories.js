import React from 'react';
import { storiesOf } from '@storybook/react';

import apolloDecorator from '../../../.storybook/apolloDecorator';
import GardenerCreatePage from './GardenerCreatePage';

storiesOf('GardenerCreatePage', module)
  .addDecorator(apolloDecorator)
  .add('empty form', () => <GardenerCreatePage />);
