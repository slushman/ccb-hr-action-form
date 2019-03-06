import React from 'react';
import { compose } from 'recompose';
import GoogleButton from 'react-google-button';
import { withFirebase } from 'react-redux-firebase';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SignInGoogle extends React.Component {

  handleClick = () => {
    this.props.firebase.login( {
      provider: 'google',
      type: 'popup'
    } )
      .then( ( googleUser ) => {
        console.log( googleUser )
        this.props.setSignedIn( true );
      } )
  }

  render() {
    return (
      <div>
        <GoogleButton
          onClick={ this.handleClick }
        />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {

  };
};

const enhance = compose(
  withFirebase,
  withRouter,
  connect( mapStateToProps, { push } )
);

export default enhance( SignInGoogle );
