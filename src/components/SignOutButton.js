import React, { Component } from 'react';

import { withFirebase } from './Firebase';
import { Button } from './Button';

class SignOutButton extends Component {
  render() {
    const { firebase } = this.props;
    return (
      <Button
        label="Sign Out"
        onClick={firebase.doSignOut}
        type="button"
      />
    );
  }
}

export default withFirebase(SignOutButton);
