import React, { Component } from 'react';

import { AuthUserContext } from '../Session';
import NavAuthed from './NavAuthed';
import NavUnauthed from './NavUnauthed';

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

export default Navigation;
