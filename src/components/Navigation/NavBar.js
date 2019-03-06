import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { compose } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;

class NavBar extends React.Component {

  static propTypes = {
    pageTitle: PropTypes.string,
  };

  handleLogout = () => {
    this.props.firebase.logout()
    .then( () => {
      this.props.history.push( ROUTES.SIGN_IN );
    } )
  }

  render() {
    console.log( this.props );
    const { location, pageTitle } = this.props;
    return (
      <AppBar>
        <Toolbar>
          { '/forms' === location.pathname &&
            <Button
              color="inherit"
              component={ NavLink }
              to={ ROUTES.NEW_FORM }
            >
              <AddIcon /> New Form
            </Button>
          }
          { ( '/newform' === location.pathname || 0 < location.pathname.indexOf( 'viewform' ) ) &&
            <Button
              color="inherit"
              component={ NavLink }
              to={ ROUTES.FORMS }
            >
              <ArrowBackIcon
                fontSize="small"
              /> Forms
            </Button>
          }
          <StyledTypography
            align="center"
            color="inherit"
            variant="h6"
          >
            {
              pageTitle
            }
          </StyledTypography>
          <Button
            color="primary"
            onClick={ this.handleLogout }
            type="submit"
            variant="contained"
          >Sign Out</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const enhance = compose(
  withFirebase,
  withRouter,
);

export default enhance( NavBar );
