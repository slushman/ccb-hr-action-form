import React, { Component }  from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { Select } from './Select';

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
export class FillPositionFields extends Component {
  render() {
    return (
      <Fieldset>
        <Legend>Fill Position</Legend>
        <Input
          label="Effective Date"
          name="dateEffective"
          type="date"
        />
        <Input
          label="Name"
          name="nameAssociate"
        />
        <Input
          label="Team"
          name="team"
        />
        <Input
          label="Role"
          name="role"
        />
        <Input
          label="Salary"
          name="salary"
        />
        <Input
          label="Date of Birth"
          name="dateBirth"
          type="date"
        />
        <Input
          label="Hire Date"
          name="dateHire"
          type="date"
        />
        <Input
          label="Team Lead"
          name="teamLead"
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
