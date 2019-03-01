import React, { Component } from 'react';
import { compose } from 'recompose';
import { withAuthentication } from '../components/Session';
import { withFirebase } from '../components/Firebase';

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

  handleApproval = (row) => (event) => {
    const currentUser = this.props.authUser;
    console.log({row,currentUser});
    const docRef = this.props.firebase.db.collection('forms').doc(row.formId);

    // who should be next in the chain?
    // should this approval message then show "waiting on {next person}"?

    docRef.update({formStatus: row.formStatus + 1});
    docRef.update({formStatusBy: currentUser.uid});

    // write to Firestore on the form object
    // add an approval in the approvals array
    // change status to waiting for ...next role
  }

  handleDenial = (row) => ( event ) => {
    const currentUser = this.props.authUser;
    const docRef = this.props.firebase.db.collection('forms').doc(row.formId);
    // what else should happen here?
    docRef.update({formStatus: 'Denied'});
    docRef.update({formStatusBy: currentUser.uid});
    // write to Firestore
    // change status to denied
  }
  
  render() {
    if ( 1 > this.state.forms.length ) {
      return null;
    }
    return (
      <AwaitingApprovalTable
        authUser={this.props.authUser}
        forms={ this.state.forms }
        handleApproval={this.handleApproval}
        handleDenial={this.handleDenial}
      />
    );
  }
}

const AwaitingApprovalContainer = compose(
  withAuthentication,
  withFirebase,
)( AwaitingApprovalContainerComp );

export { AwaitingApprovalContainer, AwaitingApprovalContainerComp };
