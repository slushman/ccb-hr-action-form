import React, { Component } from 'react';
import Textarea from '../Fields/Textarea';

/**
 * Field appears if:
 * requestType is not empty.
 */
class Comments extends Component {
  render() {
    return (
      <Textarea
        label="Comments"
        name="comments"
        {...this.props}
      />
    );
  }
}

export default Comments;
