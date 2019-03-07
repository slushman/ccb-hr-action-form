import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import {
  ApproveButton,
  DenyButton,
} from '../../styles';

class FormActions extends React.Component {

  static propTypes = {
    formInfo: PropTypes.object.isRequired,
  };

  handleApproval = () => {
    const { firebase, formInfo } = this.props;
    const docRef = firebase.firestore().collection('forms').doc(formInfo.formId);
    const responseUpdate = {};
    responseUpdate[`responses.HR.response`] = 'approved';
    responseUpdate[`responses.HR.dateResponse`] = dayjs( new Date() ).format( 'YYYY-MM-DDTHH:mm:ss' );
    docRef.update( responseUpdate )
    .then(() => {
      setTimeout(() => {
        alert('Form approved!');
      }, 250)
    })
  }

  handleDenial = () => {
    const { firebase, formInfo } = this.props;
    const docRef = firebase.firestore().collection('forms').doc(formInfo.formId);
    const responseUpdate = {};
    responseUpdate[`responses.HR.response`] = 'denied';
    responseUpdate[`responses.HR.dateResponse`] = dayjs( new Date() ).format( 'YYYY-MM-DDTHH:mm:ss' );
    docRef.update( responseUpdate )
    .then(() => {
      setTimeout(() => {
        alert('Form denied!');
      }, 250)
    })
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
