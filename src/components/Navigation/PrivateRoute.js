import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withAuthentication } from './components/Session';

class PrivateRoute extends Component {

  static propTypes = {
    
  };

  static defaultProps = {
    
  };

  state = {
    
  };

  render() {
    return (
      <AuthUserContext.Consumer>
        {
          authUser => {
            authUser
              ? <Component {...this.props} />
              : <Redirect to="/sign-in" />
          }
        }
      </AuthUserContext.Consumer>
    );
  }
}

export default PrivateRoute;
