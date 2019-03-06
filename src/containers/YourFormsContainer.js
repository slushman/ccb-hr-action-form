import React from 'react';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { convertToArrayWithFormId } from '../functions';
import YourFormsTable from '../components/FormTables/YourFormsTable';

class YourFormsContainer extends React.Component {
  render() {
    if ( ! isLoaded( this.props.forms ) ) {
      return null;
    }
    const formsArray = convertToArrayWithFormId( this.props.forms );
    const myForms = formsArray.filter( ( form ) => {
      return this.props.authUser.uid === form.submitterId;
    } );
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
