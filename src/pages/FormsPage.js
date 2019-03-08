import React from 'react';

import { Main, Grid, Wrapper } from '../styles';
import AwaitingApprovalContainer from '../containers/AwaitingApprovalContainer';
import YourFormsContainer from '../containers/YourFormsContainer';
import UserInfo from '../components/UserInfo';
import NavBar from '../components/Navigation/NavBar';

class FormsPage extends React.Component {
  render() {
    return (
      <Main>
        <Grid>
          <Wrapper>
            <NavBar pageTitle={ 'Your Forms' } />
            <UserInfo />
            <AwaitingApprovalContainer />
            <YourFormsContainer />
          </Wrapper>
        </Grid>
      </Main>
    );
  }
}

export default FormsPage;

