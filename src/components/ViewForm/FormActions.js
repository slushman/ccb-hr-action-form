import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';

import {
  ApproveButton,
  DenyButton,
} from '../../styles';

class FormActions extends React.Component {

  static propTypes = {
    formInfo: PropTypes.object.isRequired,
  };

  handleApproval = () => {
    const { formInfo } = this.props;
    const currentUser = this.props.authUser;
    console.log({ formInfo, currentUser });
    const docRef = this.props.firebase.db.collection('forms').doc(formInfo.formId);

    // who should be next in the chain?
    // should this approval message then show "waiting on {next person}"?

    docRef.update({formStatus: formInfo.formStatus + 1});
    docRef.update({formStatusBy: currentUser.uid});

    // write to Firestore on the form object
    // add an approval in the approvals array
    // change status to waiting for ...next role
  }

  handleDenial = () => {
    const { formInfo } = this.props;
    const currentUser = this.props.authUser;
    const docRef = this.props.firebase.db.collection('forms').doc(formInfo.formId);
    // what else should happen here?
    docRef.update({formStatus: 'Denied'});
    docRef.update({formStatusBy: currentUser.uid});
    // write to Firestore
    // change status to denied
  }

  render() {
    return (
      <React.Fragment>
        <ApproveButton
          onClick={ this.handleApproval }
          type="submit"
        >Approve</ApproveButton>
        <DenyButton
          onClick={ this.handleDenial }
          type="submit"
        >Deny</DenyButton>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    authUser: state.firebase.auth,
    firestore: state.firestore,
  };
};

const enhance = compose(
  withFirestore,
  withRouter,
  connect( mapStateToProps )
);

export default enhance( FormActions );
