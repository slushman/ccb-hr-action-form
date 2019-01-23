import React, { Component } from 'react';
import { Select } from '../Fields/Select';

/**
 * Field appears if:
 * requestType is employment
 */
export class EmploymentType extends Component {
  render() {
    return (
      <Select
        label="Employment Type"
        name="employmentType"
        options={[
          {
            label: 'New Hire',
            value: 'new-hire',
          },
          {
            label: 'Rehire',
            value: 'rehire',
          },
          {
            label: 'Resignation',
            value: 'resignation',
          },
          {
            label: 'Termination',
            value: 'termination',
          },
        ]}
        placeholder="Select employment type"
      />
    );
  }
}
