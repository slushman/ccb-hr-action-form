import React, { Component }  from 'react';
import styled from 'styled-components';
import Input from '../Fields/Input';
import Select from '../Fields/Select';
import { AssociateName } from './AssociateName';

const Fieldset = styled.fieldset`
  margin-bottom: 1.5em;
`;

const Legend = styled.legend``;

/**
 * Fields that appear if:
 * requestType is talent-acquisition
 * and
 * acquisitionType is fill-position
 */
class FillPositionFields extends Component {
  render() {
    return (
      <Fieldset>
        <Legend>Fill Position</Legend>
        <Input
          label="Effective Date"
          name="dateEffective"
          type="date"
          {...this.props}
        />
        <AssociateName />
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

export default FillPositionFields;
