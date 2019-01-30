import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: ${ props => props.theme.palette.background.default }
  }
`;

class YourFormsRow extends Component {

  static propTypes = {
    row: PropTypes.object.isRequired,
    theme: PropTypes.object,
  };

  render() {
    const { row } = this.props;
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
        <TableCell align="right">{ 4 > row.formStatus ? `${row.formStatus}/4` : 'Approved'}</TableCell>
      </StyledTableRow>
    );
  }
}

export default YourFormsRow;
