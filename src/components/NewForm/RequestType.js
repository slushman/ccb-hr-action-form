import React from 'react';
import Select from '../Fields/Select';

class RequestType extends React.Component {
  render() {
    return (
      <Select
        label="Request Type"
        name="requestType"
        options={[
          {
            label: 'Employment',
            value: 'employment',
          },
          {
            label: 'Talent Acquisition',
            value: 'talent-acquisition',
          },
          {
            label: 'Add Role',
            value: 'add-role',
          },
          {
            label: 'Role Change',
            value: 'role-change',
          },
          {
            label: 'Transfer or Promotion',
            value: 'transfer-promotion',
          },
          {
            label: 'Leave',
            value: 'leave',
          },
        ]}
        placeholder="Select the request type"
      />
    );
  }
}

export default RequestType;
