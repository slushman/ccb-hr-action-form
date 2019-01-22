import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../constants/routes';
import { Button } from '../components/Button';

class SignInPage extends Component {
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <SignInGoogle />
      </div>
    );
  }
}

class SignInGoogleBase extends Component {
  state = {
    error: null
  };

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        console.log({socialAuthUser});
        return this.props.firebase
          //.user(socialAuthUser.user.uid)
          // .set({
          //   username: socialAuthUser.user.displayName,
          //   email: socialAuthUser.user.email,
          //   roles: [],
          // });
      })
      .then(() => {
        this.setState({
          error: null
        });
        this.props.history.push(ROUTES.ACCOUNT);
      })
      .catch( error => {
        this.setState({
          error
        });
      });
      event.preventDefault();
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Button label="Sign in with Google" />
        {
          error &&
            <p>{error.message}</p>
        }
      </form>
    );
  }
}

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

export { SignInPage, SignInGoogle };
