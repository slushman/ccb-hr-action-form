import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Fields/Select';
import Input from '../Fields/Input';

import {
  Fieldset,
  Legend,
} from '../../styles';

/**
 * Field group appears for all fields, if requestType has a value.
 */
class ApprovalFields extends React.Component {
  static propTypes = {
    values: PropTypes.object.isRequired,
  };

  render() {
    const { values } = this.props;
    return (
      <Fieldset>
        <Legend>Approvals Needed</Legend>
        <Input
          label="HR"
          name="approvalsHR"
          readOnly
          value="sondra-calhoun"
        />
        { ( 'employment' === values.requestType ||
          ( 'talent-acquisition' === values.requestType &&
              'new-position' === values.acquisitionType ) ||
            'add-role' === values.requestType ||
            'leave' === values.requestType ) &&
          <Input
            label="Finance"
            name="approvalsFinance"
            readOnly
            value="someone?"
          />
        }
        <Select
          label="Leadership Team"
          name="approvalsLT"
          options={[
            {
              label: 'Aaron Senneff',
              value: 'aaron-senneff',
            },
            {
              label: 'Amanda Williams',
              value: 'amanda-williams',
            },
            {
              label: 'Heather Sharp',
              value: 'heather-sharp',
            },
            {
              label: 'Jeff Otero',
              value: 'jeff-otero',
            },
          ]}
          placeholder="Select leadership team member"
        />
        { ( ( 'talent-acquisition' === values.requestType &&
             'new-position' === values.acquisitionType ) ||
          'add-role' === values.requestType ||
          'transfer-promotion' === values.requestType ) &&
          <Input
            label="CEO"
            name="approvalsCEO"
            readOnly
            value="don-harms"
          />
        }
        { ( 'employment' === values.requestType &&
            ( 'new-hire' === values.employmentType ||
              'rehire' === values.employmentType )
          ) &&
          (
            <React.Fragment>
              <Input
                label="IT"
                name="approvalsIT"
                readOnly
                value="joe-donnellon"
              />
              <Input
                label="Facilities"
                name="approvalsFacilities"
                readOnly
                value="john-zabka"
              />
            </React.Fragment>
          )
        }
      </Fieldset>
    );
  }
}

export default ApprovalFields;
