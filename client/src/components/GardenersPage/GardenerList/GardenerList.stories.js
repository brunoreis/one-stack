import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GardenerList from './GardenerList';
import mocked from './mocks';

storiesOf('GardenerList', module)
  .add('empty list', () => <GardenerList gardeners={mocked.emptyList} />)
  .add('long list', () => <GardenerList gardeners={mocked.longList} />);
