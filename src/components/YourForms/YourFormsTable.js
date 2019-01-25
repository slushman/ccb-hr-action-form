import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import {
  Link, 
} from 'react-router-dom';

import { TablePaginationActions } from './TablePaginationActions';

import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const theme = createMuiTheme({
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

export class YourFormsTable extends Component {

  static propTypes = {
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

  render() {
    const { page, rows, rowsPerPage } = this.state;
    const emptyRows = rowsPerPage - Math.min( rowsPerPage, rows.length - page * rowsPerPage );
    return (
      <ThemeProvider theme={theme}>
        <WrappingPaper>
          <TableWrap>
            <StyledTable>
              <StyledTableHead>
                <TableRow>
                  <HeaderCell component="th">Form Name</HeaderCell>
                  <HeaderCell align="right" component="th">Request Type</HeaderCell>
                  <HeaderCell align="right" component="th">Submission Date</HeaderCell>
                  <TableCell align="right">Approvals</TableCell>
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
                      {/* <TableCell align="right">{ moment( row.approvals.approvalHR, 'YYYY-MM-DDTHH:mm:ss' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                      <TableCell align="right">{ moment( row.approvals.approvalLT, 'YYYY-MM-DDTHH:mm:ss' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                      <TableCell align="right">{ moment( row.approvals.approvalCEO, 'YYYY-MM-DDTHH:mm:ss' ).format( 'M/D/YYYY h:mm A' ) }</TableCell> */}
                      <TableCell align="right">
                        { /*
                        //   row.approvals.map( ( approval, i ) => (
                        //     <Typography component="p" key={i}>{approval.type}: {moment( approval.timestamp, 'YYYY-MM-DDTHH:mm:ss' ).format( 'M/D/YYYY h:mm A' )}</Typography>
                        //   ))
                        // */
                        }
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
    );
  }
}
