import React from 'react';
import { storiesOf } from '@storybook/react';

import apolloDecorator from '../../../../.storybook/apolloDecorator';
import GardenerCreateFormContainer from './GardenerCreateFormContainer';

storiesOf('Gardener/Create/Form', module)
  .addDecorator(apolloDecorator)
  .add('empty form', () => <GardenerCreateFormContainer />);
