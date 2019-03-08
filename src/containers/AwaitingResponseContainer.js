import React from 'react';
import { compose } from 'recompose';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import * as R from 'ramda';

import {
  convertToArrayWithFormId,
  waitingOnMe,
} from '../functions';
import AwaitingResponseTable from '../components/FormTables/AwaitingResponseTable';
import {
  Grid,
  Heading2,
  Paragraph,
} from '../styles';

const NoForms = () => (
  <div style={ { marginBottom: '3em' } }>
    <Paragraph>You have no forms waiting for your response.</Paragraph>
  </div>
);

class AwaitingApprovalContainer extends React.Component {
  render() {

    if ( ! isLoaded( this.props.forms ) ) {
      return null;
    }

    const formsArray = convertToArrayWithFormId( this.props.forms ); // convert forms to an array

    const formsWaitingOnMe = (form) => waitingOnMe( form, this.props.authUser );
    let myAwaitingForms = R.filter( formsWaitingOnMe, formsArray );

    const descDate = R.descend( R.prop( 'dateSubmitted' ) ); // sort descending
    myAwaitingForms = R.sort( descDate, myAwaitingForms ); // sort myAwaitingForms descending by submission date.

    return (
      <Grid>
        <Heading2>Forms waiting for your response</Heading2>
          {
            0 === myAwaitingForms.length
              ? <NoForms />
              : <AwaitingResponseTable rows={ myAwaitingForms } />
          }
      </Grid>
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
