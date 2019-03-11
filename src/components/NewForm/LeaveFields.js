import React from 'react';
import Input from '../Fields/Input';
import Select from '../Fields/Select';

import {
  Fieldset,
  Legend,
} from '../../styles';

/**
 * Fields that appear if:
 * requestType is leave
 */
class LeaveFields extends React.Component {
  render() {
    const { values } = this.props;
    return (
      <Fieldset>
        <Legend>Leave</Legend>
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

export default LeaveFields;
