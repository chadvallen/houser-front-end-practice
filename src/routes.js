import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard1 from './components/Wizard1/Wizard1';
import Wizard2 from './components/Wizard2/Wizard2';
import Wizard3 from './components/Wizard3/Wizard3';

export default 
<Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/wizard' component={Wizard1} />
    <Route path='/wizard2' component={Wizard2} />
    <Route path='/wizard3' component={Wizard3} />
</Switch>