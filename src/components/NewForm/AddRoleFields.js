import React from 'react';
import Input from '../Fields/Input';
import Select from '../Fields/Select';

import {
  Fieldset,
  Legend,
} from '../../styles';

/**
 * These fields should appear:
 * - when requestType is add-role
 */
class AddRoleFields extends React.Component {
  render() {
    return (
      <Fieldset>
        <Legend>Add Role</Legend>
        <Input
          label="New Role Name"
          name="nameNewRole"
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

export default AddRoleFields;
