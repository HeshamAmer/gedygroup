import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Contact-Us' component={ContactUs}></Route>
    </Switch>
  );
}

export default Main