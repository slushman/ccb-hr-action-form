import React, { Component } from 'react';
import { Input } from '../Fields/Input';

export class AssociateName extends Component {
  render() {
    return (
      <Input
        label="Associate Name"
        name="nameAssociate"
        {...this.props}
      />
    );
  }
}
