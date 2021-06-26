import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Pricing from './pages/Pricing';
import Social from './pages/Social';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/contact-Us' component={ContactUs}></Route>
      <Route exact path='/pricing' component={Pricing}></Route>
      <Route exact path='/social' component={Social}></Route>
    </Switch>
  );
}

export default Main