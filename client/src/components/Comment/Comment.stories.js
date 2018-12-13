import React from 'react';
import { storiesOf } from '@storybook/react';

import Comment from './Comment';

storiesOf('Comment', module)
  .add('mocked', () => <Comment />);
