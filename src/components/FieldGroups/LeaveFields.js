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
 * requestType is leave
 */
export class LeaveFields extends Component {
  render() {
    const { values } = this.props;
    return (
      <Fieldset>
        <Legend>Leave</Legend>
        <AssociateName {...this.props} />
        <Select
          label="Leave Type"
          name="leaveType"
          options={[
            {
              label: 'Bereavement',
              value: 'bereavement',
            },
            {
              label: 'FMLA',
              value: 'fmla',
            },
            {
              label: 'James 1:27',
              value: 'james127',
            },
            {
              label: 'Jury Duty',
              value: 'jury-duty',
            },
            {
              label: 'Long-term Disability',
              value: 'long-term-disability',
            },
            {
              label: 'Military',
              value: 'military',
            },
            {
              label: 'Short-term Disability',
              value: 'short-term-disability',
            },
            {
              label: 'Other',
              value: 'other',
            },
          ]}
          placeholder="Select status"
        />
        { 'other' === values.leaveType &&
          <Input
            label="Other Explanation"
            name="otherExplanation"
            {...this.props}
          />
        }
        { 'james127' === values.leaveType &&
          <Input
            label="Number of Days"
            name="numberOfDays"
            {...this.props}
          />
        }
        <Input
          label="Expected Return Date"
          name="dateLeaveReturn"
          type="date"
          {...this.props}
        />
        <Input
          label="PTO Hours to use after paid leave"
          name="leavePtoHours"
          type="number"
          {...this.props}
        />
      </Fieldset>
    );
  }
}
