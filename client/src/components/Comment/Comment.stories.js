import React from 'react';
import { storiesOf } from '@storybook/react';

import Comment from './Comment';
import PageContainer from './PageContainer';

storiesOf('Comment', module)
  .add('mocked', () => <Comment />)
  .add('page container test', () => <PageContainer />);
