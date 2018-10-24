import '../src/index';
import '@storybook/addon-console';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ApolloProvider } from 'react-apollo';

import client from '../src/client';

export default () => {
  addDecorator(withInfo({ inline: true }));
  addDecorator(
    story => (
      <ApolloProvider client={client}>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
            {story()}
        </div>
      </ApolloProvider>
    )
  )
}
