import React from 'react';
import { storiesOf } from '@storybook/react';

import PlantItem from './PlantItem';
import mocked from './mocks';

storiesOf('Plant/List/Item', module)
  .add('simple', () => <PlantItem plant={mocked[0]} />)
  .add('edible', () => <PlantItem plant={mocked[1]} />);
