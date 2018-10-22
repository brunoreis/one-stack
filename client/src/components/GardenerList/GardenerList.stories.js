import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GardenerList from './GardenerList';
import mocked from './mocks';

storiesOf('GardenerList', module)
  .add('mocked', () => <GardenerList gardeners={mocked} />);
