import React from 'react';
import { compose } from 'recompose';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import * as R from 'ramda';

import {
  convertToArrayWithFormId,
  waitingOnMe,
} from '../functions';
import AwaitingApprovalTable from '../components/FormTables/AwaitingApprovalTable';

class AwaitingApprovalContainer extends React.Component {
  render() {

    if ( ! isLoaded( this.props.forms ) ) {
      return null;
    }

    const formsArray = convertToArrayWithFormId( this.props.forms ); // convert forms to an array

    const formsWaitingOnMe = (form) => waitingOnMe( form, this.props.authUser );
    const myAwaitingForms = R.filter( formsWaitingOnMe, formsArray );

    if ( 0 === myAwaitingForms.length ) {
      return null;
    }

    return (
      <AwaitingApprovalTable rows={ myAwaitingForms } />
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
