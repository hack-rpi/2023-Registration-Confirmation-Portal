import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';
import Yes from './Yes'; 
import No from './No';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/yes" component={Yes} />
        <Route path="/no" component={No} />
      </Switch>
    </Router>
  );
};

export default Routes;