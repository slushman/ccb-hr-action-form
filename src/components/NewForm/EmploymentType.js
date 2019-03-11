import React from 'react';
import Select from '../Fields/Select';

/**
 * This field should appear:
 * - when requestType is employment
 */
class EmploymentType extends React.Component {
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

export default EmploymentType;
