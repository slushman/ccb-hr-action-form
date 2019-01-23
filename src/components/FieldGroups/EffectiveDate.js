import React, { Component } from 'react';
import { Input } from '../Fields/Input';

/**
 * Appears for the following criteria:
 * If requestType is employment or leave or role-change or transfer-promotion
 */
export class EffectiveDate extends Component {
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
