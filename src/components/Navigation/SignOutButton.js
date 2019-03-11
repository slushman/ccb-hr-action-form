import React from 'react';
import { compose } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';
import { buttonShadows, buttonStyles } from '../../styles';

const Button = styled.button`
  ${ buttonStyles }
  ${ buttonShadows }
  background-color: inherit;
  color: #fff;
  font-size: 0.875rem;

  &:hover {
    background-color: #303f9f;
  }
`;

class SignOutButton extends React.Component {

  handleLogout = () => {
    this.props.firebase.logout()
    .then( () => {
      this.props.history.push( ROUTES.SIGN_IN );
    } )
  }

  render() {
    return (
      <Button
        onClick={ this.handleLogout }
        type="submit"
      >Sign Out</Button>
    );
  }
}

const enhance = compose(
  withFirebase,
  withRouter,
);

export default enhance( SignOutButton );

