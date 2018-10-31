import React from 'react';
import { storiesOf } from '@storybook/react';

import apolloDecorator from '../../../../.storybook/apolloDecorator';
import GardenerCreateFormContainer from './GardenerCreateFormContainer';

storiesOf('GardenerCreateForm', module)
  .addDecorator(apolloDecorator)
  .add('empty form', () => <GardenerCreateFormContainer />);
