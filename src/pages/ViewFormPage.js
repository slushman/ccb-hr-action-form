import React from 'react';

import { Main, Grid, Wrapper } from '../styles';
import ViewFormContainer from '../containers/ViewFormContainer';
import NavBar from '../components/Navigation/NavBar';

class ViewFormPage extends React.Component {
  render() {
    return (
      <Main>
        <Grid>
          <Wrapper>
            <NavBar pageTitle={ 'View HR Action Form' } />
            <ViewFormContainer />
          </Wrapper>
        </Grid>
      </Main>
    );
  }
}

export default ViewFormPage;
