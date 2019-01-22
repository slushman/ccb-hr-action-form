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
 * requestType is employment
 * and
 * employmentType is resignation or termination
 */
export class ResignationTerminationFields extends Component {
  render() {
    const { values } = this.props;
    return (
      <Fieldset>
        <Legend>Resignation or Termination</Legend>
        <Select
          label="Eligible for Rehire?"
          name="rehireEligibility"
          options={[
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ]}
          placeholder="Select rehire eligibility"
        />
        {
          'no' === values.rehireEligibility &&
            <Input
              label="Why are they not rehirable?"
              name="notRehirable"
            />
        }
      </Fieldset>
    );
  }
}
