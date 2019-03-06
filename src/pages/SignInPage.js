import React from 'react';
import { compose } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import { Main, Grid, Heading1, Paragraph, WrapperSignIn } from '../styles';
import * as ROUTES from '../constants/routes';

class SignInPage extends React.Component {

  handleClick = () => {
    this.props.firebase.login( {
      provider: 'google',
      type: 'popup'
    } )
      .then( ( googleUser ) => {
        console.log( googleUser )
        this.props.history.push( ROUTES.FORMS );
      } )
  }

  render() {
    console.log( this.props );
    return (
      <Main>
        <Grid>
          <WrapperSignIn>
            <Heading1>Sign In</Heading1>
            <Paragraph>Welcome to the HR Action Form.</Paragraph>
            <Paragraph>Please sign in to proceed.</Paragraph>
            <GoogleButton
              onClick={ this.handleClick }
            />
          </WrapperSignIn>
        </Grid>
      </Main>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    authUser: state.firebase.auth,
  };
};

const enhance = compose(
  withFirebase,
  withRouter,
  connect( mapStateToProps )
);

export default enhance( SignInPage );
