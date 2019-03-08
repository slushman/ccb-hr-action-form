import React from 'react';
import FormActions from './FormActions';
import { Banner } from '../../styles';

class ActionBanner extends React.Component {
  render() {
    return (
      <Banner>
        <FormActions formInfo={ this.props.formInfo } />
      </Banner>
    )
  }
}

export default ActionBanner;
