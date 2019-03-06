import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import { Main, Grid, Wrapper } from '../styles';
import AwaitingApprovalContainer from '../containers/AwaitingApprovalContainer';
import YourFormsContainer from '../containers/YourFormsContainer';
import UserInfo from '../components/UserInfo';
import NavBar from '../components/Navigation/NavBar';

class FormsPage extends React.Component {
  render() {
    console.log( this.props );
    const { authUser } = this.props;
    return (
      <Main>
        <Grid>
          <Wrapper>
            <NavBar pageTitle={ 'Your Forms' } />
            <UserInfo />
            <AwaitingApprovalContainer authUser={ authUser } />
            <YourFormsContainer authUser={ authUser } />
          </Wrapper>
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
  connect( mapStateToProps )
);

export default enhance( FormsPage );
