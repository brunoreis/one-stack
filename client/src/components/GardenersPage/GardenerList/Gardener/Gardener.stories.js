import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Gardener from './Gardener';
import mocked from './mocks';

storiesOf('Gardener', module)
  .add('long text', () => <Gardener gardener={mocked.longText} />)
  .add('many gardens', () => <Gardener gardener={mocked.manyGardens} />)
  .add('no gardens', () => <Gardener gardener={mocked.noGardens} />)
  .add('many recipes', () => <Gardener gardener={mocked.manyRecipes} />)
  .add('no recipes', () => <Gardener gardener={mocked.noRecipes} />);
