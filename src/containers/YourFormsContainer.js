import React, { Component } from 'react';

import { forms } from '../constants/testForms';
import { YourFormsTable } from '../components/YourForms/YourFormsTable';

export class YourFormsContainer extends Component {
  state = {
    error: false,
    forms: [],
    loading: false,
  };

  componentDidMount() {
    this.getForms();
  }

  getForms = () => {
    // const json = await axios.get('https://village.ccbchurch.com/api/church/membership_types');
    // const forms = json.data;
    this.setState({
      forms,
      loading: true,
    });
    try {
      this.setState({
        loading: false,
      });
    } catch ( error ) {
      this.setState({
        error: true,
        loading: true,
      });
    }
  }
  
  render() {
    if ( 1 > this.state.forms.length ) {
      return null;
    }
    return (
      <YourFormsTable
        forms={ this.state.forms }
      />
    );
  }
}
