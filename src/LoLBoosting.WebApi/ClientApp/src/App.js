import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import background from './Images/background.jpg';
import { BoostMe } from './components/BoostMe';

let sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`
}

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <Layout>
            <Route exact path='/' component={Home} />
            <AuthorizeRoute path='/boostme' component={BoostMe} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
              </Layout>
      );
  }
}
