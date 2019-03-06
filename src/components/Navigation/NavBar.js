import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import NewFormButton from './NewFormButton';
import BackToFormsButton from './BackToFormsButton';
import SignOutButton from './SignOutButton';

const MyAppBar = styled.div`
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  left: auto;
  right: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1100;
`;

const MyToolbar = styled.div`
  align-items: center;
  display: flex;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
`;

const PageTitle = styled.h1`
  color: #fff;
  display: block;
  flex-grow: 1;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.25em;
  font-weight: 500;
  letter-spacing: 0.0075em;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

class NavBar extends React.Component {

  static propTypes = {
    pageTitle: PropTypes.string,
  };

  render() {
    const { location, pageTitle } = this.props;
    return (
      <MyAppBar>
        <MyToolbar>
          { '/forms' === location.pathname && <NewFormButton /> }
          { ( '/newform' === location.pathname || 0 < location.pathname.indexOf( 'viewform' ) ) && <BackToFormsButton /> }
          <PageTitle>{ pageTitle }</PageTitle>
          <SignOutButton />
        </MyToolbar>
      </MyAppBar>
    );
  }
}

const enhance = compose(
  withRouter,
);

export default enhance( NavBar );
