import React, { Component } from 'react';
import styled from 'styled-components';
import { Input } from '../Fields/Input';
import { Select } from '../Fields/Select';
import { AssociateName } from './AssociateName';

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
        <AssociateName />
        <Fieldset>
          <Legend>Previous Role</Legend>
          <Input
            label="Previous Role Name"
            name="roleNamePrevious"
            {...this.props}
          />
          <Input
            label="Previous Salary"
            name="salaryPrevious"
            {...this.props}
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
            {...this.props}
          />
        </Fieldset>
        <Fieldset>
          <Legend>New Role</Legend>
          <Input
            label="New Role Name"
            name="roleNameNew"
            {...this.props}
          />
          <Input
            label="New Salary"
            name="salaryNew"
            {...this.props}
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
            {...this.props}
          />
        </Fieldset>
      </Fieldset>
    );
  }
}
