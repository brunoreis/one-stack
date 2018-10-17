import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Gardener from './Gardener';

storiesOf('Gardener', module)
  .add('mocked', () => <Gardener />);
