import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../constants/routes';
import SignOutButton from './SignOutButton';

const Nav = styled.nav``;

const NavList = styled.ul``;

const NavItem = styled.li``;

const NavLink = styled(Link)``;

export class Navigation extends Component {
  render() {
    const { authUser } = this.props;
    return (
      <Nav>
        {
          authUser ? <NavAuthed /> : <NavUnauthed />
        }
      </Nav>
    );
  }
}

const NavAuthed = () => (
  <NavList>
    <NavItem>
      <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={ROUTES.NEW_FORM}>New Form</NavLink>
    </NavItem>
    <NavItem>
      <SignOutButton />
    </NavItem>
  </NavList>
);

const NavUnauthed = () => (
  <NavList>
    <NavItem>
      <NavLink to={ROUTES.HOME}>Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </NavItem>
  </NavList>
);
