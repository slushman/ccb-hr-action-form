import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const TableActionsWrap = styled.div`
  color: ${ props => props.theme.palette.text.secondary };
  flex-shrink: 0;
  margin-left: ${ props => props.theme.spacing.unit * 2.5 }px;
`;

class TablePaginationActions extends React.Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  handleBackPageButtonClick = event => {
    this.props.onChangePage( event, this.props.page - 1 );
  }

  handleFirstPageButtonClick = event => {
    this.props.onChangePage( event, 0 );
  }

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max( 0, Math.ceil( this.props.count / this.props.rowsPerPage ) - 1 ),
    );
  }

  handleNextPageButtonClick = event => {
    this.props.onChangePage( event, this.props.page + 1 );
  }

  render() {
    const { count, page, rowsPerPage } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <TableActionsWrap>
          <IconButton
            aria-label="First Page"
            disabled={ 0 === page }
            onClick={ this.handleFirstPageButtonClick }
          >
            <FirstPageIcon />
          </IconButton>
          <IconButton
            aria-label="Previous Page"
            disabled={ 0 === page }
            onClick={ this.handleBackPageButtonClick }
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            aria-label="Next Page"
            disabled={ Math.ceil( count / rowsPerPage ) - 1 <= page }
            onClick={ this.handleNextPageButtonClick }
          >
            <KeyboardArrowRight />
          </IconButton>
          <IconButton
            aria-label="Last Page"
            disabled={ Math.ceil( count / rowsPerPage ) - 1 <= page }
            onClick={ this.handleLastPageButtonClick }
          >
            <LastPageIcon />
          </IconButton>
        </TableActionsWrap>
      </ThemeProvider>
    );
  }
}

export default TablePaginationActions;
