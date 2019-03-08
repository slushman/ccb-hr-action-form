import React from 'react';

import { Main, Grid, Wrapper } from '../styles';
import AwaitingResponseContainer from '../containers/AwaitingResponseContainer';
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
            <AwaitingResponseContainer />
            <YourFormsContainer />
          </Wrapper>
        </Grid>
      </Main>
    );
  }
}

export default FormsPage;
