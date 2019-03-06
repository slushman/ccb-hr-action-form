import React from 'react';
import { compose } from 'recompose';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { convertToArrayWithFormId } from '../functions';
import AwaitingApprovalTable from '../components/FormTables/AwaitingApprovalTable';

class AwaitingApprovalContainer extends React.Component {
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
    if ( ! isLoaded( this.props.forms ) ) {
      return null;
    }
    console.log( this.props );
    const formsArray = convertToArrayWithFormId( this.props.forms );
    const myForms = formsArray.filter( ( form ) => {
      return this.props.authUser.uid === form.submitterId;
    } );
    return (
      <AwaitingApprovalTable
        rows={ myForms }
        handleApproval={ this.handleApproval }
        handleDenial={ this.handleDenial }
      />
    );
  }
};

const mapStateToProps = ( state ) => {
  return {
    authUser: state.firebase.auth,
    firestore: state.firestore,
    forms: state.firestore.data.forms,
  };
};

const enhance = compose(
  firestoreConnect( () => [ 'forms' ] ),
  connect( mapStateToProps )
);

export default enhance( AwaitingApprovalContainer );
