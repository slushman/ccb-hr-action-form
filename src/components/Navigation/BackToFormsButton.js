import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import * as ROUTES from '../../constants/routes';
import { NavButton } from '../../styles';

class BackToFormsButton extends React.Component {
  render() {
    return (
      <NavButton
        to={ ROUTES.FORMS }
      >
        <ArrowBackIcon
          fontSize="small"
        /> Forms
      </NavButton>
    );
  }
}

export default BackToFormsButton;
