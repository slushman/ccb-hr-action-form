import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import FormActions from '../ViewForm/FormActions';

import {
  TableCell,
  TableRow,
} from '../../styles';

class AwaitingFormsRow extends React.Component {

  static propTypes = {
    row: PropTypes.object.isRequired,
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
        <TableCell align="right">
          <FormActions formInfo={ row } />
        </TableCell>
      </TableRow>
    );
  }
}

export default AwaitingFormsRow;
