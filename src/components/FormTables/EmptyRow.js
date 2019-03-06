import React from 'react';
import PropTypes from 'prop-types';

import {
  TableCell,
  TableRow,
} from '../../styles';

class EmptyRow extends React.Component {

  static propTypes = {
    emptyRows: PropTypes.number.isRequired,
  };

  render() {
    const { emptyRows } = this.props;
    return (
      0 < emptyRows && (
        <TableRow>
          <TableCell colSpan={5}></TableCell>
        </TableRow>
      )
    );
  }
}

export default EmptyRow;
