import '../src/index.js';
import '@storybook/addon-console';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import client from '../src/client'
import App from '../src/components/App';

export default () => {
  addDecorator(withInfo({ inline: true }));
  addDecorator(
    story => (
      <ApolloProvider client={client}>
        <CurrentUserProvider>
          <App />
        </CurrentUserProvider>
      </ApolloProvider>
    )
  )
}
