import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GardenerList from './GardenerList';
import GardenerListContainer from './GardenerListContainer';
import mocked from './mocks';

import apolloDecorator from '../../../../.storybook/apolloDecorator';

storiesOf('GardenerList', module)
  .add('empty list', () => <GardenerList gardenersQuery={{ gardeners: mocked.emptyList }} />)
  .add('long list', () => <GardenerList gardenersQuery={{ gardeners: mocked.longList }} />)
  .addDecorator(apolloDecorator)
  .add('connected', () => <GardenerListContainer />);
