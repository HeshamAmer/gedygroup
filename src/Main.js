import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Pricing from './pages/Pricing';
import Social from './pages/Social';
import Imprint from './pages/Imprint';
import Work from './pages/Work';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contact-Us' component={ContactUs}/>
            <Route exact path='/pricing' component={Pricing}/>
            <Route exact path='/social' component={Social}/>
            <Route exact path='/imprint' component={Imprint}/>
            <Route exact path='/work' component={Work}/>
        </Switch>
    );
}

export default Main