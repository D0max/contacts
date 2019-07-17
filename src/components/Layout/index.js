import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/index';

const Index = Page => props => (
  <>
    <CssBaseline />
    <Header />
    <main className="main">
      <Page {...props} />
    </main>
  </>
);


export default Index;
