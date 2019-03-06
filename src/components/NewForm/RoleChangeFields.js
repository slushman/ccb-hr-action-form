import React from 'react';
import Input from '../Fields/Input';
import Select from '../Fields/Select';

import {
  Fieldset,
  Legend,
} from '../../styles';

/**
 * Fields that appear if:
 * requestType is role-change
 */
class RoleChangeFields extends React.Component {
  render() {
    return (
      <Fieldset>
        <Legend>Role Change</Legend>
        <Input
          label="Role Name"
          name="roleName"
          {...this.props}
        />
        <Input
          label="New Rate"
          name="newRate"
          {...this.props}
        />
        <Select
          label="New Role Status"
          name="statusNewRole"
          options={[
            {
              label: 'Full-time',
              value: 'full-time',
            },
            {
              label: 'Part-time',
              value: 'part-time',
            },
          ]}
          placeholder="Select status"
        />
        <Select
          label="New Role FLSA Classification"
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
          placeholder="Select classification"
        />
      </Fieldset>
    );
  }
}

export default RoleChangeFields;
