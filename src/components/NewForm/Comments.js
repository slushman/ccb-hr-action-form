import React from 'react';
import Textarea from '../Fields/Textarea';

/**
 * This field should appear:
 * - when requestType is not empty.
 */
class Comments extends React.Component {
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
