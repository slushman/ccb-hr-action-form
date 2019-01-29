import React, { Component, Fragment } from 'react';
import { 
  NavLink, 
  Redirect,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';
import { FormsPage } from '../../pages/FormsPage';
import { NewFormPage } from '../../pages/NewFormPage';
import ViewFormPage from '../../pages/ViewFormPage';

const StyledNavLink = styled(NavLink)``;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;

class NavAuthedComp extends Component {
  state = {
    anchorEl: null,
    pageTitle: '',
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  }

  handleMenu = ( event ) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  setTitle = (pageTitle) => {
    this.setState({
      pageTitle
    });
  }

  render() {
    const { firebase } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean( anchorEl );
    return (
      <Fragment>
        <AppBar>
          <Toolbar>
            <IconButton
              aria-label="Menu"
              aria-owns={ anchorEl ? 'main-menu' : undefined }
              color="inherit"
              onClick={ this.handleMenu }
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={ anchorEl }
              id="main-menu"
              onClose={ this.handleClose }
              open={ open }
            >
              <MenuItem
                component={StyledNavLink}
                onClick={ this.handleClose }
                to={ ROUTES.FORMS }
              >
                Forms
              </MenuItem>
              <MenuItem
                component={StyledNavLink}
                onClick={ this.handleClose }
                to={ ROUTES.NEW_FORM }
              >
                New Form
              </MenuItem>
            </Menu>
            <StyledTypography
              align="center"
              color="inherit"
              variant="h6"
            >
              {
                this.state.pageTitle
              }
            </StyledTypography>
            <Button
              color="primary"
              onClick={firebase.doSignOut}
              type="submit"
              variant="contained"
            >Sign Out</Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route
            path={ROUTES.VIEW_FORM}
            render={(props) => (
                <ViewFormPage
                  form={props.location.state.form}
                  formId={props.match.params.formId}
                  setTitle={this.setTitle}
                />
            )}
          />
          <Route
            path={ROUTES.FORMS}
            render={(props) => <FormsPage setTitle={this.setTitle} />}
          />
          <Route
            path={ROUTES.NEW_FORM}
            render={(props) => <NewFormPage setTitle={this.setTitle} />}
          />
          <Redirect to={ROUTES.FORMS} />
        </Switch>
      </Fragment>
    );
  }
}

const NavAuthed = withRouter( NavAuthedComp );

export { NavAuthed, NavAuthedComp };
