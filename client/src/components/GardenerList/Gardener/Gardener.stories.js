import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Gardener from './Gardener';
import mocked from './mocks';

storiesOf('Gardener', module)
  .add('mocked', () => <Gardener gardener={mocked} />);
