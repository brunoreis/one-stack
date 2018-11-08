import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import client from './client';
import registerServiceWorker from './registerServiceWorker';

import './styles/common__fonts.css';

import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
