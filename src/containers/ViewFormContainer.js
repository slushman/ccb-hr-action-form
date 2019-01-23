import React, { Component } from 'react';

import { ViewForm } from '../components/ViewForm';

export class ViewFormContainer extends Component {
  state = {
    error: false,
    form: [],
    loading: false,
  };

  // componentDidMount() {
  //   this.getForm();
  // }

  // getForm = (props) => {
  //   let form = [
  //     {
  //       formId: 'kbevkbdkbf',
  //       formName: 'Test Form 15',
  //       dateSubmitted: '2019-02-02T12:00',
  //       approvals: [
  //         {
  //           type: 'HR',
  //           timestamp: '2019-02-02T13:00',
  //         },
  //         {
  //           type: 'LT',
  //           timestamp: '2019-02-02T14:00',
  //         },
  //         {
  //           type: 'CEO',
  //           timestamp: '2019-02-02T15:00',
  //         },
  //       ],
  //       fields: [
  //         {
  //           fieldName: 'Request Type',
  //           value: 'employment',
  //         },
  //         {
  //           fieldName: 'Employment Type',
  //           value: 'new-hire',
  //         },
  //         {
  //           fieldName: 'Associate Name',
  //           value: 'Bilbo Baggins',
  //         },
  //         {
  //           fieldName: 'Team',
  //           value: 'Burglary',
  //         },
  //         {
  //           fieldName: 'Role',
  //           value: 'Lead Burglar',
  //         },
  //         {
  //           fieldName: 'Salary',
  //           value: '100000',
  //         },
  //         {
  //           fieldName: 'Date of Birth',
  //           value: '1971-09-08',
  //         },
  //         {
  //           fieldName: 'Team Lead',
  //           value: 'Thorin Oakenshield',
  //         },
  //         {
  //           fieldName: 'Status',
  //           value: 'full-time',
  //         },
  //         {
  //           fieldName: 'FLSA Classification',
  //           value: 'exempt',
  //         },
  //       ],
  //     },
  //   ];
    // const json = await axios.get('https://village.ccbchurch.com/api/church/membership_types/${this.props.formId}');
    // const forms = json.data;
  //   this.setState({
  //     form,
  //     loading: true,
  //   });
  //   try {
  //     this.setState({
  //       loading: false,
  //     });
  //   } catch ( error ) {
  //     this.setState({
  //       error: true,
  //       loading: true,
  //     });
  //   }
  // }
  
  render() {
    return (
      <ViewForm
        form={ this.props.form }
      />
    );
  }
}
