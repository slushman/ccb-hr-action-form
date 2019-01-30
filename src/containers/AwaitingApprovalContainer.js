import React, { Component } from 'react';
import { compose } from 'recompose';
import { withAuthentication } from '../components/Session';
import { withFirebase } from '../components/Firebase';


//import { forms } from '../constants/testForms';
import AwaitingApprovalTable from '../components/FormTables/AwaitingApprovalTable';

class AwaitingApprovalContainerComp extends Component {
  state = {
    error: false,
    forms: [],
    loading: false,
  };

  componentDidMount() {
    this.getForms();
  }

  getForms = async () => {
    let formsArray = [];

    const formsRef = await this.props.firebase.db.collection('forms');
    const currentUserId = this.props.authUser.uid;
    try {
      const allFormsSnapshot = await formsRef.where('submitterId', '==', currentUserId).get();
      allFormsSnapshot.forEach( form => {
        const formData = form.data();
        formData.formId = form.id;
        formsArray.push(formData);
      })
    } catch ( error ) {
      console.log('Error getting documents', error);
    }
    this.setState({
      forms: formsArray,
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
      <AwaitingApprovalTable
        authUser={this.props.authUser}
        forms={ this.state.forms }
      />
    );
  }
}

const AwaitingApprovalContainer = compose(
  withAuthentication,
  withFirebase,
)( AwaitingApprovalContainerComp );

export { AwaitingApprovalContainer, AwaitingApprovalContainerComp };