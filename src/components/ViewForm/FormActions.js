import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import * as EMAILS from '../../constants/emails';

import {
  ApproveButton,
  DenyButton,
} from '../../styles';

const getResponseType = (currentUser) => {
  switch ( currentUser.email ) {
    case 'cwilcoxson@gmail.com':
      return 'LT';
    case EMAILS.AARONSENNEFF:
      return 'LT';
    case EMAILS.AMANDAWILLIAMS:
      return 'LT';
    case EMAILS.HEATHERSHARP:
      return 'LT';
    case EMAILS.JEFFOTERO:
      return 'LT';
    case EMAILS.DONHARMS:
      return 'CEO';
    case EMAILS.SONDRACALHOUN:
      return 'HR';
    case EMAILS.FINANCE:
      return 'FIN';
    default:
      return '';
  }
};

class FormActions extends React.Component {

  static propTypes = {
    formInfo: PropTypes.object.isRequired,
    setWaiting: PropTypes.func,
  };

  handleApproval = () => {
    const { firebase, formInfo, setWaiting } = this.props;
    const docRef = firebase.firestore().collection('forms').doc(formInfo.formId);
    const responseUpdate = {};
    const responseType = getResponseType(this.props.authUser);
    responseUpdate[`responses.${ responseType }.response`] = 'approved';
    responseUpdate[`responses.${ responseType }.dateResponse`] = dayjs( new Date() ).format( 'YYYY-MM-DDTHH:mm:ss' );
    docRef.update( responseUpdate )
    .then(() => {
      if ( setWaiting ) {
        setWaiting( false );
      }
      setTimeout(() => {
        alert('Form approved!');
      }, 250)
    })
  }

  handleDenial = () => {
    const { firebase, formInfo, setWaiting } = this.props;
    const docRef = firebase.firestore().collection('forms').doc(formInfo.formId);
    const responseUpdate = {};
    const responseType = getResponseType(this.props.authUser);
    responseUpdate[`responses.${ responseType }.response`] = 'denied';
    responseUpdate[`responses.${ responseType }.dateResponse`] = dayjs( new Date() ).format( 'YYYY-MM-DDTHH:mm:ss' );
    docRef.update( responseUpdate )
    .then(() => {
      if ( setWaiting ) {
        setWaiting( false );
      }
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
