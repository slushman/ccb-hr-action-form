import React, { Component } from 'react';
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
 * acquisitionType is new-position
 */
export class NewPositionFields extends Component {
  render() {
    return (
      <Fieldset>
        <Legend>New Position</Legend>
        <Input
          label="Team"
          name="team"
        />
        <Input
          label="Role"
          name="role"
        />
        <Input
          label="Hiring Lead"
          name="hiringLead"
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
        />
        <Input
          label="Date Closed"
          name="dateClosed"
          type="date"
        />
        <Input
          label="Date Filled"
          name="dateFilled"
          type="date"
        />
      </Fieldset>
    );
  }
}
