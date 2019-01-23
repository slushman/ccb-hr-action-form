import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { compose } from 'recompose';

import { withFirebase } from '../components/Firebase';
import { YourFormsContainer } from '../containers/YourFormsContainer';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const Main = styled.main`
  display: block;
  margin-left: ${ props => props.theme.spacing.unit * 3 }px;
  margin-right: ${ props => props.theme.spacing.unit * 3 }px;
  margin-top: 4em;
  width: auto;
  
  ${ theme.breakpoints.up( 400 + theme.spacing.unit * 3 * 2 ) }{
    margin-left: auto;
    margin-right: auto;
    width: 60rem;
  }
`;

const WrappingPaper = styled(Paper)`
  padding: ${ props => props.theme.spacing.unit * 3}px;
`;

class YourForms extends Component {
  componentDidMount() {
    this.props.setTitle('Your Forms');
  }
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <CssBaseline />
          <Grid item xs={ 12 }>
            <WrappingPaper>
              <Typography
                align="center"
                component="h1"
                variant="h5"
              >Your Forms</Typography>
              <YourFormsContainer />
            </WrappingPaper>
          </Grid>
        </Main>
      </ThemeProvider>
    );
  }
}

const YourFormsPage = compose(
  withRouter,
  withFirebase,
)( YourForms );

export { YourForms, YourFormsPage };