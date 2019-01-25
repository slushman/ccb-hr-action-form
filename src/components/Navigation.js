import React, { Component } from 'react';
import { 
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import { NavAuthed } from './NavAuthed';
import { AuthUserContext } from './Session';
import { SignInPage } from '../pages/SignInPage';

class Navigation extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {
          authUser => authUser ? <NavAuthed /> : <NavUnauthed />
        }
      </AuthUserContext.Consumer>
    );
  }
}

const NavUnauthed = () => (
  <Switch>
    <Route path={ROUTES.SIGN_IN} component={SignInPage} title="Sign In" />
    <Redirect to={ROUTES.SIGN_IN} />
  </Switch>
);

export default Navigation;
