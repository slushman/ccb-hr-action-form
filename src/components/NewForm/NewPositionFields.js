import React from 'react';
import Input from '../Fields/Input';
import Select from '../Fields/Select';

import {
  Fieldset,
  Legend,
} from '../../styles';

/**
 * Fields that appear if:
 * requestType is talent-acquisition
 * and
 * acquisitionType is new-position
 */
class NewPositionFields extends React.Component {
  render() {
    return (
      <Fieldset>
        <Legend>New Position</Legend>
        <Input
          label="Team"
          name="team"
          {...this.props}
        />
        <Input
          label="Role"
          name="role"
          {...this.props}
        />
        <Input
          label="Hiring Lead"
          name="hiringLead"
          {...this.props}
        />
        <Input
          label="Salary"
          name="salary"
          {...this.props}
        />
        <Select
          label="Status"
          name="status"
          options={[
            {
              label: 'Full-time',
              value: 'full-time',
            },
            {
              label: 'Part-time',
              value: 'part-time',
            },
          ]}
          placeholder="Select status"
        />
        <Select
          label="FLSA Classification"
          name="flsaClassification"
          options={[
            {
              label: 'Exempt',
              value: 'exempt',
            },
            {
              label: 'Non-exempt',
              value: 'non-exempt',
            },
          ]}
          placeholder="Select classification"
        />
        <Input
          label="Date Posted"
          name="datePosted"
          type="date"
          {...this.props}
        />
        <Input
          label="Date Closed"
          name="dateClosed"
          type="date"
          {...this.props}
        />
        <Input
          label="Date Filled"
          name="dateFilled"
          type="date"
          {...this.props}
        />
      </Fieldset>
    );
  }
}

export default NewPositionFields;
