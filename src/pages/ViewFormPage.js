import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import ViewForm from '../components/ViewForm';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
    width: 48rem;
  }
`;

const WrappingPaper = styled(Paper)`
  padding: ${ props => props.theme.spacing.unit * 3}px;
`;

class ViewFormPage extends Component {

  componentDidMount() {
    this.props.setTitle('View HR Action Form');
  }
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <CssBaseline />
          <Grid item xs={ 12 }>
            <WrappingPaper>
              <ViewForm
                form={this.props.form}
              />
            </WrappingPaper>
          </Grid>
        </Main>
      </ThemeProvider>
    );
  }
}

export default ViewFormPage;
