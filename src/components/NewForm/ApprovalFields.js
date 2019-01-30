import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FastField } from 'formik';
import Select from '../Fields/Select';

const Fieldset = styled.fieldset`
  margin-bottom: 1.5em;
`;
Fieldset.displayName = 'Fieldset';

const Legend = styled.legend``;
Legend.displayName = 'Legend';

/**
 * Field group appears for all fields, if requestType has a value.
 */
class ApprovalFields extends Component {
  static propTypes = {
    values: PropTypes.object.isRequired,
  };

  render() {
    const { values } = this.props;
    return (
      <Fieldset>
        <Legend>Approvals Needed</Legend>
        <FastField
          name="approvalsHR"
          type="hidden"
        />
        { ( 'employment' === values.requestType ||
          ( 'talent-acquisition' === values.requestType &&
              'new-position' === values.acquisitionType ) ||
            'add-role' === values.requestType ||
            'leave' === values.requestType ) &&
          <FastField
            name="approvalsFinance"
            type="hidden"
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
              value: 'aamnda-williams',
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
          <FastField
            name="approvalsCEO"
            type="hidden"
          />
        }
        { ( 'employment' === values.requestType &&
            ( 'new-hire' === values.employmentType ||
              'rehire' === values.employmentType )
          ) &&
          (
            <Fragment>
              <FastField
                name="approvalsIT"
                type="hidden"
              />
              <FastField
                name="approvalsFacilities"
                type="hidden"
              />
            </Fragment>
          )
        }
      </Fieldset>
    );
  }
}

export default ApprovalFields;
