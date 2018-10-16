import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Comentario from './Comentario';

storiesOf('Comentario', module)
  .add('mocked', () => <Comentario />);
