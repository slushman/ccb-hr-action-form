import React from 'react';
import Input from '../Fields/Input';

/**
 * Appears for the following criteria:
 * On all forms.
 */
class FormName extends React.Component {
  render() {
    return (
      <Input
        label="Form Name"
        name="formName"
        {...this.props}
      />
    )
  };
}

export default FormName;
