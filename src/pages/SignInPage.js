import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../constants/routes';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const Main = styled.main`
  display: block;
  margin-left: ${ props => props.theme.spacing.unit * 3 }px;
  margin-right: ${ props => props.theme.spacing.unit * 3 }px;
  margin-top: 4em;
  width: auto;
  
  ${ theme.breakpoints.up( 400 + theme.spacing.unit * 3 * 2 ) }{
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }
`;

const StyledPaper = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${ props => props.theme.spacing.unit * 8 };
  padding: ${ props=> props.theme.spacing.unit * 2 }px ${ props=> props.theme.spacing.unit * 3 }px ${ props=> props.theme.spacing.unit * 3 }px
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 1.5em;
`;

class SignInPage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <CssBaseline />
          <StyledPaper>
            <StyledTypography component="h1" gutterBottom variant="h3">Sign In</StyledTypography>
            <StyledTypography component="p" paragraph variant="body1">Welcome to the HR Action Form.</StyledTypography>
            <StyledTypography component="p" paragraph variant="body1">Please sign in to proceed.</StyledTypography>
            <SignInGoogle />
          </StyledPaper>
        </Main>
      </ThemeProvider>
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
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
          });
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
        <Button
          color="primary"
          type="submit"
          variant="contained"
        >Sign in with Google</Button>
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
