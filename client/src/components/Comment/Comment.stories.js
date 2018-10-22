import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Comment from './Comment';

storiesOf('Comment', module)
  .add('mocked', () => <Comment />);
