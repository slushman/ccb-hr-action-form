import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import * as R from 'ramda';
import { fields } from '../constants/fields';

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

const sortByDisplayOrder = R.sortWith([
  R.ascend(R.prop('displayOrder')),
]);

const maybeFormatDate = (fieldData, fieldKey) => {
  if (fieldKey.startsWith('date')) {
    return moment( fieldData, 'YYYY-MM-DD' ).format( 'M/D/YYYY' )
  }
  return fieldData;
}

class ViewForm extends Component {

  static propTypes = {
    form: PropTypes.object.isRequired,
  };

  render() {
    const { form } = this.props;
    const hasData = R.filter( R.compose( R.not, R.isEmpty), form );
    let fieldData = Object.entries(hasData);
    const removeTheseFields = ['dateSubmitted','formId','formName','submitterId'];
    fieldData = fieldData.filter( data => {
      return ! removeTheseFields.includes(data[0]) 
    });
    fieldData.forEach(function(data){
      const fieldInfo = R.find(R.propEq('key', data[0]))(fields);
      data.displayOrder = fieldInfo.displayOrder;
    });
    fieldData = sortByDisplayOrder( fieldData );
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <CssBaseline />
          <Grid item xs={ 12 }>
            <Typography component="h1" paragraph variant="title">{ hasData.formName }</Typography>

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
                  fieldData.map((field,i) => {
                    const fieldInfo = R.find(R.propEq('key', field[0]))(fields);
                    return (
                      <StyledTableRow key={ i }>
                        <TableCell>{ fieldInfo.label }</TableCell>
                        <TableCell>{ maybeFormatDate( field[1], field[0] ) }</TableCell>
                      </StyledTableRow>
                    )
                  })
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
                {/*
                  form.approvals.map((approval,i) => {
                    return(
                    <StyledTableRow key={ i }>
                      <TableCell>{ approval.type }</TableCell>
                      <TableCell>{ moment( approval.timestamp, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                    </StyledTableRow>
                  )})
                    */}
              </TableBody>
            </StyledTable>
          </Grid>
        </Main>
      </ThemeProvider>
    );
  }
}

export default ViewForm;
