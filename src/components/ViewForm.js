import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const Main = styled.main`
  display: block;
  margin-left: ${ props => props.theme.spacing.unit * 3 }px;
  margin-right: ${ props => props.theme.spacing.unit * 3 }px;
  width: auto;
  
  ${ theme.breakpoints.up( 400 + theme.spacing.unit * 3 * 2 ) }{
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledTable = styled(Table)`
  margin-bottom: 3em;
  min-width: 500px;
`;

const StyledTableHead = styled(TableHead)`
  background-color: #eff2f7;
`;

const HeaderCell = styled(TableCell)`
  color: #545454 !important;
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: ${ props => props.theme.palette.background.default }
  }
`;

export class ViewForm extends Component {
  render() {
    const { form } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <CssBaseline />
          <Grid item xs={ 12 }>
            <Typography component="h1" paragraph variant="title">{ form.formName }</Typography>

            <Typography component="h2" paragraph>Form Fields</Typography>
            <StyledTable>
              <StyledTableHead>
                <TableRow>
                  <HeaderCell component="th">Field Name</HeaderCell>
                  <HeaderCell component="th">Field Value</HeaderCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {
                  form.fields.map((field,i) => (
                    <StyledTableRow key={ i }>
                      <TableCell>{ field.fieldName }</TableCell>
                      <TableCell>{ field.value }</TableCell>
                    </StyledTableRow>
                  ))
                }
              </TableBody>
            </StyledTable>

            <Typography component="h2" paragraph>Form Status</Typography>
            <StyledTable>
              <StyledTableHead>
                <TableRow>
                  <HeaderCell component="th">Field Name</HeaderCell>
                  <HeaderCell component="th">Field Value</HeaderCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                <StyledTableRow>
                  <TableCell>Date Submitted</TableCell>
                  <TableCell>{ moment( form.dateSubmitted, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                </StyledTableRow>
                {
                  form.approvals.map((approval,i) => {
                    return(
                    <StyledTableRow key={ i }>
                      <TableCell>{ approval.type }</TableCell>
                      <TableCell>{ moment( approval.timestamp, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                    </StyledTableRow>
                  )})
                }
              </TableBody>
            </StyledTable>
          </Grid>
        </Main>
      </ThemeProvider>
    );
  }
}

ViewForm.propTypes = {
  form: PropTypes.object.isRequired,
};
