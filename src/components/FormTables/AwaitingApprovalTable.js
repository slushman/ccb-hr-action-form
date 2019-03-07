import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

import TablePaginationActions from './TablePaginationActions';
import EmptyRow from './EmptyRow';
import AwaitingFormsRow from './AwaitingFormsRow';

import {
  Grid,
  Heading2,
  HeaderCell,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeadRow,
  TableRow,
  TableWrap,
  WrappingPaper,
} from '../../styles';

class AwaitingApprovalTable extends React.Component {

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
      <Grid>
        <Heading2>Forms waiting for your approval</Heading2>
        <WrappingPaper>
          <TableWrap>
            <Table>
              <TableHead>
                <TableHeadRow>
                  <HeaderCell component="th">Form Name</HeaderCell>
                  <HeaderCell align="right" component="th">Request Type</HeaderCell>
                  <HeaderCell align="right" component="th">Submission Date</HeaderCell>
                  <TableCell align="right">Action</TableCell>
                </TableHeadRow>
              </TableHead>
              <TableBody>
                {
                  rows.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map( ( row, i ) => (
                    <AwaitingFormsRow key={ i } row={ row } />
                  ))
                }
                <EmptyRow emptyRows={ emptyRows } />
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    ActionsComponent={ TablePaginationActions }
                    colSpan={ 5 }
                    count={ rows.length }
                    onChangePage={ this.handleChangePage }
                    onChangeRowsPerPage={ this.handleChangeRowsPerPage }
                    page={ page }
                    rowsPerPage={ rowsPerPage }
                    rowsPerPageOptions={ [ 5,10,25 ] }
                    SelectProps={ {
                      native: true,
                    } }
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

export default AwaitingApprovalTable;
