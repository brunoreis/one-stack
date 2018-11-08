import React from 'react';
import { storiesOf } from '@storybook/react';

import Gardener from './Gardener';
import mocked from '../../../../mocks/gardener/gardenerMocks';

storiesOf('Gardener/List/Item', module)
  .add('long description', () => <Gardener gardener={mocked.longDescription} />)
  .add('many gardens', () => <Gardener gardener={mocked.manyGardens} />)
  .add('no gardens', () => <Gardener gardener={mocked.noGardens} />)
  .add('many recipes', () => <Gardener gardener={mocked.manyRecipes} />)
  .add('no recipes', () => <Gardener gardener={mocked.noRecipes} />);
