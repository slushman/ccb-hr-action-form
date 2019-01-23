import React, { Component } from 'react';
import { Select } from '../Fields/Select';

/**
 * Field appears if:
 * requestType is talent-acquisition
 */
export class AcquisitionType extends Component {
  render() {
    return (
      <Select
        label="Acquisition Type"
        name="acquisitionType"
        options={[
          {
            label: 'New Position',
            value: 'new-position',
          },
          {
            label: 'Fill Existing Position',
            value: 'fill-position',
          },
        ]}
        placeholder="Select acquisition type"
      />
    );
  }
}
