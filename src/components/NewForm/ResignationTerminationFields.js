import React from 'react';
import Input from '../Fields/Input';
import Select from '../Fields/Select';

import {
  Fieldset,
  Legend,
} from '../../styles';

/**
 * Fields that appear if:
 * requestType is employment
 * and
 * employmentType is resignation or termination
 */
class ResignationTerminationFields extends React.Component {
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
              {...this.props}
            />
        }
      </Fieldset>
    );
  }
}

export default ResignationTerminationFields;
