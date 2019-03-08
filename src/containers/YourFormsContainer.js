import React from 'react';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { convertToArrayWithFormId } from '../functions';
import YourFormsTable from '../components/FormTables/YourFormsTable';

class YourFormsContainer extends React.Component {
  render() {
    if ( ! isLoaded( this.props.forms ) ) {
      return null;
    }
    const formsArray = convertToArrayWithFormId( this.props.forms );

    const isThisMyForm = (form) => this.props.authUser.uid === form.submitterId; // Does the submitterId match the current user id?
    const myForms = R.filter( isThisMyForm, formsArray ); // Return just the matching forms

    return (
      <YourFormsTable
        rows={ myForms }
      />
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    authUser: state.firebase.auth,
    forms: state.firestore.data.forms,
  };
};

const enhance = compose(
  firestoreConnect( () => [ 'forms' ] ),
  connect( mapStateToProps )
);

export default enhance( YourFormsContainer );
