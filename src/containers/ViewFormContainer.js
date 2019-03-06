import React from 'react';
import { compose } from 'recompose';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { convertToArrayWithFormId } from '../functions';
import ViewForm from '../components/ViewForm/ViewForm';

class ViewFormContainer extends React.Component {
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
    const { forms, match } = this.props;
    const formId = match.params.formId;
    const formsArray = convertToArrayWithFormId( forms );
    const form = formsArray.filter( ( form ) => {
      return formId === form.formId;
    } );
    
    return (
      <ViewForm
        form={ form[0] }
        formId={ formId }
      />
    );
  }
};

const mapStateToProps = ( state ) => {
  return {
    forms: state.firestore.data.forms,
  };
};

const enhance = compose(
  firestoreConnect( () => [ 'forms' ] ),
  withRouter,
  connect( mapStateToProps )
);

export default enhance( ViewFormContainer );
