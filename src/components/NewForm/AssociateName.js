import React from 'react';
import Input from '../Fields/Input';

/**
 * This field should appear:
 * - when requestType is employment, but employmentType is not new-hire
 * or
 * - when requestType is leave
 */
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
