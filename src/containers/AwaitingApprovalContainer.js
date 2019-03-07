import React from 'react';
import { compose } from 'recompose';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { convertToArrayWithFormId } from '../functions';
import AwaitingApprovalTable from '../components/FormTables/AwaitingApprovalTable';

class AwaitingApprovalContainer extends React.Component {
  render() {
    if ( ! isLoaded( this.props.forms ) ) {
      return null;
    }
    const formsArray = convertToArrayWithFormId( this.props.forms );

    // @TODO: Fix filter here to only show forms that are waiting for your approval
    const awaitingForms = formsArray.filter( ( form ) => {
      return 'Approved' !== form.formStatus && 'Denied' !== form.formStatus;
    } );
    return (
      <AwaitingApprovalTable rows={ awaitingForms } />
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
