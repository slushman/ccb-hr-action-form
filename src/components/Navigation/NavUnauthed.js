import React, { Component } from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { SignInPage } from '../../pages/SignInPage';

class NavUnauthed extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignInPage} title="Sign In" />
        <Redirect to={ROUTES.SIGN_IN} />
      </Switch>
    );
  }
}

export default NavUnauthed;
