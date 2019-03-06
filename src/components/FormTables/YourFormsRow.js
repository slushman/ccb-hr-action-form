import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import {
  TableCell,
  TableRow,
} from '../../styles';

class YourFormsRow extends React.Component {

  static propTypes = {
    row: PropTypes.object.isRequired,
    theme: PropTypes.object,
  };

  render() {
    const { row } = this.props;
    
    return (
      <TableRow>
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
        <TableCell align="right">{ dayjs( row.dateSubmitted, 'YYYY-MM-DDTHH:mm:ss' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
        <TableCell align="right">{ 4 > row.formStatus ? `${row.formStatus}/4` : 'Approved'}</TableCell>
      </TableRow>
    );
  }
}

export default YourFormsRow;
