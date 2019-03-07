import React from 'react';
import { compose } from 'recompose';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { convertToArrayWithFormId } from '../functions';
import ViewForm from '../components/ViewForm/ViewForm';

class ViewFormContainer extends React.Component {
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
