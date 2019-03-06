import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import * as ROUTES from '../../constants/routes';
import { NavButton } from '../../styles';

class NewFormButton extends React.Component {
  render() {
    return (
      <NavButton
        to={ ROUTES.NEW_FORM }
      >
        <AddIcon
          fontSize="small"
        /> New Form
      </NavButton>
    );
  }
}

export default NewFormButton;
