import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

import TablePaginationActions from './TablePaginationActions';
import EmptyRow from './EmptyRow';
import YourFormsRow from './YourFormsRow';

import {
  Grid,
  Heading2,
  HeaderCell,
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeadRow,
  TableRow,
  TableWrap,
  WrappingPaper,
} from '../../styles';

class YourFormsTable extends React.Component {

  static propTypes = {
    rows: PropTypes.array.isRequired,
  };

  state = {
    page: 0,
    rowsPerPage: 10,
  };

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
    const { rows } = this.props;
    const { page, rowsPerPage } = this.state;
    const emptyRows = rowsPerPage - Math.min( rowsPerPage, rows.length - page * rowsPerPage );
    return (
      <Grid item style={{ marginBottom: 40, marginTop: 20 }}>
        <Heading2>Your Forms</Heading2>
        <WrappingPaper>
          <TableWrap>
            <Table>
              <TableHead>
                <TableHeadRow>
                  <HeaderCell>Form Name</HeaderCell>
                  <HeaderCell>Request Type</HeaderCell>
                  <HeaderCell>Submission Date</HeaderCell>
                  <HeaderCell>Form Status</HeaderCell>
                </TableHeadRow>
              </TableHead>
              <TableBody>
                {
                  rows.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map( ( row, i ) => (
                    <YourFormsRow key={i} row={row} />
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
            </Table>
          </TableWrap>
        </WrappingPaper>
      </Grid>
    );
  }
}

export default YourFormsTable;
