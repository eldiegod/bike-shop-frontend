import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Orders from './Orders';

const Admin = () => {
  return (
    <Switch>
      <Route path="/admin/orders" component={Orders} />
      {/* <Route path="/orders" component={Orders} /> */}
      <Redirect to="/admin/orders" />
    </Switch>
  );
};

export default Admin;
