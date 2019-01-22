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
 * requestType is transfer-promotion
 */
export class TransferPromotionFields extends Component {
  render() {
    return (
      <Fieldset>
        <Legend>Transfers and Promotions</Legend>
        <Fieldset>
          <Legend>Previous Role</Legend>
          <Input
            label="Previous Role Name"
            name="roleNamePrevious"
          />
          <Input
            label="Previous Salary"
            name="salaryPrevious"
          />
          <Select
            label="Previous FLSA Classification"
            name="flsaClassificationPrevious"
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
            placeholder="Select previous classification"
          />
          <Input
            label="Previous Team Lead"
            name="teamLeadPrevious"
          />
        </Fieldset>
        <Fieldset>
          <Legend>New Role</Legend>
          <Input
            label="New Role Name"
            name="roleNameNew"
          />
          <Input
            label="New Salary"
            name="salaryNew"
          />
          <Select
            label="New FLSA Classification"
            name="flsaClassificationNewRole"
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
            placeholder="Select new classification"
          />
          <Input
            label="New Team Lead"
            name="teamLeadNew"
          />
        </Fieldset>
      </Fieldset>
    );
  }
}
