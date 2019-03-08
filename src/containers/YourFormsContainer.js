import React from 'react';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { convertToArrayWithFormId } from '../functions';
import YourFormsTable from '../components/FormTables/YourFormsTable';
import {
  Grid,
  Heading2,
  Paragraph,
  WrappingPaper,
} from '../styles';

const NoForms = () => (
  <div>
    <Paragraph>You have no submitted forms.</Paragraph>
  </div>
);

class YourFormsContainer extends React.Component {
  render() {
    if ( ! isLoaded( this.props.forms ) ) {
      return null;
    }
    const formsArray = convertToArrayWithFormId( this.props.forms );

    const isThisMyForm = (form) => this.props.authUser.uid === form.submitterId; // Does the submitterId match the current user id?
    let myForms = R.filter( isThisMyForm, formsArray ); // Return just the matching forms

    const descDate = R.descend( R.prop( 'dateSubmitted' ) ); // sort descending
    myForms = R.sort( descDate, myForms ); // sort myForms descending by submission date.

    return (
      <Grid>
        <Heading2>Your Forms</Heading2>
        {
          0 === myForms.length
            ? <NoForms />
            : <YourFormsTable rows={ myForms } />
        }
      </Grid>
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
