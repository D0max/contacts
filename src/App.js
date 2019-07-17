import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Layout from './components/Layout';
import Favorite from './Pages/Favorite';
import AddPage from './Pages/AddPage';


const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Layout(HomePage)} />
      <Route path="/favorite" component={Layout(Favorite)} />
      <Route path="/add" component={Layout(AddPage)} />
    </Switch>
  </Fragment>
);

export default App;
