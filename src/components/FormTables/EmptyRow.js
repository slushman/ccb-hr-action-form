import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class EmptyRow extends Component {

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
