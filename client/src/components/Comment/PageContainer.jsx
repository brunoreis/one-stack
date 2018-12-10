import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Comment from './Comment';

const PageContainer = () => (
  <div>

    <div
      className="fixed-top mx-auto"
      style={{
        maxWidth: '720px',
      }}
    >
      <Header text="teste" />
    </div>

    <div
      className="mx-auto fixed-bottom"
      style={{
        maxWidth: '720px',
      }}
    >
      <Footer />
    </div>

    <div
      className="container mx-auto bg-white"
      style={{
        maxWidth: '720px',
        padding: '75px 0px',
        minHeight: '100vh',
      }}
    >
      <Comment />
    </div>

  </div>
);

export default PageContainer;
