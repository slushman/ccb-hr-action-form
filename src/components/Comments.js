import React, { Component } from 'react';
import { Textarea } from './Textarea';

/**
 * Field appears if:
 * requestType is not empty.
 */
export class Comments extends Component {
  render() {
    return (
      <Textarea
        label="Comments"
        name="comments"
      />
    );
  }
}
