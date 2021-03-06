import React from 'react';
import Input from '../Fields/Input';
import Select from '../Fields/Select';
import AssociateName from './AssociateName';

import {
  Fieldset,
  Legend,
} from '../../styles';

/**
 * This field should appear:
 * - when requestType is employment
 * and
 * - when employmentType is new-hire
 */
class NewHireFields extends React.Component {
  render() {
    return (
      <Fieldset>
        <Legend>New Hire</Legend>
        <AssociateName {...this.props} />
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
          label="Salary"
          name="salary"
          {...this.props}
        />
        <Input
          label="Date of Birth"
          name="dateBirth"
          type="date"
          {...this.props}
        />
        <Input
          label="Hire Date"
          name="dateHire"
          type="date"
          {...this.props}
        />
        <Input
          label="Team Lead"
          name="teamLead"
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
      </Fieldset>
    );
  }
}

export default NewHireFields;
