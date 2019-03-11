import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';

import StatusItem from './StatusItem';
import {
  TableCell,
  TableRow,
} from '../../styles';

const StatusList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

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
        <TableCell align="right">
            <StatusList>
              { row.responses && 
                Object.entries(row.responses).map( ( response, i ) => (
                  <StatusItem key={ i } label={ response[0] } responseInfo={ response[1] } />
                ) )
              }
            </StatusList>
        </TableCell>
      </TableRow>
    );
  }
}

export default YourFormsRow;
