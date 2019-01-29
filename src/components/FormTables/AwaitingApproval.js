import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import {
  Link, 
} from 'react-router-dom';

import { withFirebase } from '../Firebase';
import TablePaginationActions from './TablePaginationActions';

import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const WrappingPaper = styled(Paper)`
  margin-top: ${ props => props.theme.spacing.unit * 3}px;
  width: 100%;
`;

const TableWrap = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
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

class AwaitingApprovalTable extends Component {

  static propTypes = {
    authUser: PropTypes.object.isRequired,
    forms: PropTypes.array.isRequired,
  };

  state = {
    page: 0,
    rows: [],
    rowsPerPage: 10,
  };

  componentDidMount() {
    this.setState({
      rows: this.props.forms,
    });  
  }
  
  handleChangePage = ( event, page ) => {
    this.setState({
      page
    });
  }

  handleChangeRowsPerPage = event => {
    this.setState({
      rowsPerPage: parseInt( event.target.value, 10 )
    });
  }

  handleApproval = (row) => (event) => {
    const currentUser = this.props.authUser;
    console.log({row,currentUser});
    const docRef = this.props.firebase.db.collection('forms').doc(row.formId);

    console.log(this.props.forms);

    // who should be next in the chain?
    // should this approval message then show "waiting on {next person}"?

    docRef.update({formStatus: row.formStatus + 1});
    docRef.update({formStatusBy: currentUser.uid});

    // write to Firestore on the form object
    // add an approval in the approvals array
    // change status to waiting for ...next role
  }

  handleDenial = (row) => ( event ) => {
    const currentUser = this.props.authUser;
    const docRef = this.props.firebase.db.collection('forms').doc(row.formId);
    // what else should happen here?
    docRef.update({formStatus: 'Denied'});
    docRef.update({formStatusBy: currentUser.uid});
    // write to Firestore
    // change status to denied
  }

  render() {
    const { page, rows, rowsPerPage } = this.state;
    const emptyRows = rowsPerPage - Math.min( rowsPerPage, rows.length - page * rowsPerPage );
    return (
      <Grid item style={{ marginBottom: 40, marginTop: 20 }}>
        <Typography component="h2" variant="h5">Forms waiting for your approval</Typography>
        <ThemeProvider theme={theme}>
          <WrappingPaper>
            <TableWrap>
              <StyledTable>
                <StyledTableHead>
                  <TableRow>
                    <HeaderCell component="th">Form Name</HeaderCell>
                    <HeaderCell align="right" component="th">Request Type</HeaderCell>
                    <HeaderCell align="right" component="th">Submission Date</HeaderCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </StyledTableHead>
                <TableBody>
                  {
                    rows.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map( ( row, i ) => {
                      return (
                      <StyledTableRow key={ i }>
                        <TableCell>
                          <Link to={{
                            pathname: `/viewform/${row.formId}`,
                            state: {
                              form: row
                            },
                          }}>
                            {
                              row.formName
                            }
                          </Link>
                        </TableCell>
                        <TableCell align="right">{row.requestType}</TableCell>
                        <TableCell align="right">{ moment( row.dateSubmitted, 'YYYY-MM-DDTHH:mm:ss' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                        <TableCell align="right">
                          <Button
                            color="primary"
                            onClick={ this.handleApproval(row) }
                            size="small"
                            style={{ marginRight: 16 }}
                            type="submit"
                            variant="contained"
                          >Approve</Button>
                          <Button
                            color="secondary"
                            onClick={ this.handleDenial(row) }
                            size="small"
                            type="submit"
                            variant="contained"
                          >Deny</Button>
                        </TableCell>
                      </StyledTableRow>
                    )})
                  }
                  {
                    0 < emptyRows && (
                      <TableRow>
                        <TableCell colSpan={5}></TableCell>
                      </TableRow>
                    )
                  }
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      ActionsComponent={TablePaginationActions}
                      colSpan={5}
                      count={rows.length}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      rowsPerPageOptions={[5,10,25]}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </TableRow>
                </TableFooter>
              </StyledTable>
            </TableWrap>
          </WrappingPaper>
        </ThemeProvider>
      </Grid>
    );
  }
}

export default withFirebase(AwaitingApprovalTable);
