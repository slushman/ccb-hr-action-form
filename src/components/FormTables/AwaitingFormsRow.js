import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: ${ props => props.theme.palette.background.default }
  }
`;

class AwaitingFormsRow extends Component {

  static propTypes = {
    handleApproval: PropTypes.func.isRequired,
    handleDenial: PropTypes.func.isRequired,
    row: PropTypes.object.isRequired,
  };

  render() {
    const { handleApproval, handleDenial, row } = this.props;
    return (
      <StyledTableRow>
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
          onClick={ handleApproval(row) }
          size="small"
          style={{ marginRight: 16 }}
          type="submit"
          variant="contained"
        >Approve</Button>
        <Button
          color="secondary"
          onClick={ handleDenial(row) }
          size="small"
          type="submit"
          variant="contained"
        >Deny</Button>
      </TableCell>
    </StyledTableRow>
    );
  }
}

export default AwaitingFormsRow;
