import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import userIsAuthenticated from './components/Navigation/UserIsAuthenticated';
import userIsNotAuthenticated from './components/Navigation/UserIsNotAuthenticated';
import SignInPage from './pages/SignInPage';
import FormsPage from './pages/FormsPage';
import NewFormPage from './pages/NewFormPage';
import ViewFormPage from './pages/ViewFormPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            component={ userIsAuthenticated( ViewFormPage ) }
            path={ ROUTES.VIEW_FORM }
          />
          <Route
            component={ userIsAuthenticated( FormsPage ) }
            path={ ROUTES.FORMS }
          />
          <Route
            component={ userIsAuthenticated( NewFormPage ) }
            path={ROUTES.NEW_FORM}
          />
          <Route path={ ROUTES.SIGN_IN } component={ userIsNotAuthenticated( SignInPage ) } />
          <Route component={ userIsNotAuthenticated( SignInPage ) } />
        </Switch>
      </Router>
    );
  }
}

export default App;
