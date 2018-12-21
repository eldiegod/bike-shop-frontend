import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Orders from './Orders';
import AddBike from './AddBike';
import Navigation from './Navigation';

const Admin = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/admin/orders" component={Orders} />
        <Route path="/admin/add_customizable" component={AddBike} />
        <Route path="/admin/add_bike" component={AddBike} />
        <Redirect to="/admin/orders" />
      </Switch>
    </>
  );
};

export default Admin;
