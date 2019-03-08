import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Fields/Select';

import {
  Fieldset,
  Legend,
} from '../../styles';
import * as EMAILS from '../../constants/emails';

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
              value: EMAILS.AARONSENNEFF,
            },
            {
              label: 'Amanda Williams',
              value: EMAILS.AMANDAWILLIAMS,
            },
            {
              label: 'Heather Sharp',
              value: EMAILS.HEATHERSHARP,
            },
            {
              label: 'Jeff Otero',
              value: EMAILS.JEFFOTERO,
            },
            {
              label: 'Chris Wilcoxson',
              value: 'cwilcoxson@gmail.com',
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
