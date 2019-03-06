import React from 'react';
import Input from '../Fields/Input';

class AssociateName extends React.Component {
  render() {
    return (
      <Input
        label="Associate Name"
        name="nameAssociate"
        {...this.props}
      />
    );
  }
}

export default AssociateName;
