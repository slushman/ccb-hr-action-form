import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Navigation } from './components/Navigation';
import { Account } from './pages/Account';
import { NewForm } from './pages/NewForm';
import { SignInPage } from './pages/SignIn';
import { Home } from './pages/Home';
import { withFirebase } from './components/Firebase';

class App extends Component {
  state= {
    authUser: null,
  };

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser ?
          this.setState({ authUser }) :
          this.setState({ authUser: null });
      }
    );
  }
  
  componentWillUnmount() {
    this.listener();
  }
  
  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.NEW_FORM} component={NewForm} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.HOME} component={Home} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);