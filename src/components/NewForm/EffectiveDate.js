import React from 'react';
import Input from '../Fields/Input';

/**
 * Appears for the following criteria:
 * If requestType is employment or leave or role-change or transfer-promotion
 */
class EffectiveDate extends React.Component {
  render() {
    return (
      <Input
        label="Effective Date"
        name="dateEffective"
        type="date"
        {...this.props}
      />
    )
  };
}

export default EffectiveDate;
