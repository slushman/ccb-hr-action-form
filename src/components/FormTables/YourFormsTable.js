import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import TablePaginationActions from './TablePaginationActions';
import EmptyRow from './EmptyRow';
import YourFormsRow from './YourFormsRow';

import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

class YourFormsTable extends Component {

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
      <Grid item style={{ marginBottom: 40, marginTop: 20 }}>
        <Typography component="h2" variant="h5">Your Forms</Typography>
        <ThemeProvider theme={theme}>
          <WrappingPaper>
            <TableWrap>
              <StyledTable>
                <StyledTableHead>
                  <TableRow>
                    <HeaderCell component="th">Form Name</HeaderCell>
                    <HeaderCell align="right" component="th">Request Type</HeaderCell>
                    <HeaderCell align="right" component="th">Submission Date</HeaderCell>
                    <HeaderCell align="right">Form Status</HeaderCell>
                  </TableRow>
                </StyledTableHead>
                <TableBody>
                  {
                    rows.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map( ( row, i ) => (
                      <YourFormsRow key={i} row={row} theme={theme} />
                    ))
                  }
                  <EmptyRow emptyRows={emptyRows} />
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

export default YourFormsTable;
