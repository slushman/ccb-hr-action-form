import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Fields/Select';

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
    return (
      <Fieldset>
        <Legend>Approvals Needed</Legend>
        <Select
          label="Leadership Team"
          name="responses.LT.contact"
          options={[
            {
              label: 'Aaron Senneff',
              value: 'asenneff@churchcommunitybuilder.com',
            },
            {
              label: 'Amanda Williams',
              value: 'awilliams@churchcommunitybuilder.com',
            },
            {
              label: 'Heather Sharp',
              value: 'hsharp@churchcommunitybuilder.com',
            },
            {
              label: 'Jeff Otero',
              value: 'jotero@churchcommunitybuilder.com',
            },
          ]}
          placeholder="Select leadership team member"
        />
        {/* { ( 'employment' === values.requestType &&
            ( 'new-hire' === values.employmentType ||
              'rehire' === values.employmentType )
          ) &&
          (
            <React.Fragment>
              <Input
                name="approvalsIT"
                type="hidden"
                value="jdonnellon@churchcommunitybuilder.com"
              />
              <Input
                name="approvalsFacilities"
                type="hidden"
                value="jzabka@churchcommunitybuilder.com"
              />
            </React.Fragment>
          )
        } */}
      </Fieldset>
    );
  }
}

export default ApprovalFields;
