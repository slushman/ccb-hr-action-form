import React from 'react';
import Select from '../Fields/Select';

/**
 * This field should appear:
 * - when requestType is talent-acquisition
 */
class AcquisitionType extends React.Component {
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

export default AcquisitionType;
