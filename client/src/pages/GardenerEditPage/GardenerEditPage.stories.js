import React from 'react';
import { storiesOf } from '@storybook/react';

import apolloDecorator from '../../../.storybook/apolloDecorator';
import GardenerEditPage from './GardenerEditPage';

storiesOf('Gardener/Edit/Page', module)
  .addDecorator(apolloDecorator)
  .add('empty form', () => <GardenerEditPage />);
