import React from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { Main, Grid, Wrapper } from '../styles';
import * as ROUTES from '../constants/routes';
import NewForm from '../components/NewForm/NewForm';
import NavBar from '../components/Navigation/NavBar';
import { validationSchema } from '../components/NewForm/validationSchema';
import * as EMAILS from '../constants/emails';

const getApprovalFields = ( values ) => {

  values.responses.LT.response = '';
  values.responses.LT.dateResponse = '';
  values.responses.HR = {};
  values.responses.HR.contact = EMAILS.SONDRACALHOUN;
  values.responses.HR.response = '';
  values.responses.HR.dateResponse = '';

  if ( 
    'employment' === values.requestType
    ||
    (
      'talent-acquisition' === values.requestType
      && 'new-position' === values.acquisitionType
    )
    || 'add-role' === values.requestType
    || 'leave' === values.requestType
  ) {
    values.responses.FIN = {};
    values.responses.FIN.contact = EMAILS.FINANCE;
    values.responses.FIN.response = '';
    values.responses.FIN.dateResponse = '';
  }

  if ( 
    (
      'talent-acquisition' === values.requestType
      && 'new-position' === values.acquisitionType
    ) 
    || 'add-role' === values.requestType
    || 'transfer-promotion' === values.requestType
  ) {
    values.responses.CEO = {};
    values.responses.CEO.contact = EMAILS.DONHARMS;
    values.responses.CEO.response = '';
    values.responses.CEO.dateResponse = '';
  }

  return values;
}

class NewFormPage extends React.Component {

  handleSubmit = (values, { setSubmitting } ) => {

    const newValues = getApprovalFields( values );

    console.log( newValues );
    this.props.firebase.firestore().collection('forms').add(
      {
        ...newValues,
        dateSubmitted: dayjs( new Date() ).format( 'YYYY-MM-DDTHH:mm:ss' ),
      }
    )
    .then(() => {
      this.props.history.push( ROUTES.FORMS );
      setTimeout(() => {
        alert('Form submitted!');
        setSubmitting(false);
      }, 250)
    })
  };

  render() {
    console.log( this.props );
    return (
      <Main>
        <Grid>
          <Wrapper>
            <NavBar pageTitle={ 'New HR Action Form' } />
            <Formik
              initialValues={
                {
                  acquisitionType: '',
                  comments: '',
                  dateBirth: '',
                  dateClosed: '',
                  dateEffective: '',
                  dateFilled: '',
                  dateHire: '',
                  dateLeaveReturn: '',
                  datePosted: '',
                  dateRequested: '',
                  employmentType: '',
                  flsaClassification: '',
                  flsaClassificationNewRole: '',
                  flsaClassificationPrevious: '',
                  formName: '',
                  hiringLead: '',
                  leavePtoHours: '',
                  leaveType: '',
                  nameAssociate: '',
                  nameNewRole: '',
                  newRate: '',
                  notRehirable: '',
                  numberOfDays: '',
                  otherExplanation: '',
                  rehireEligibility: '',
                  requestType: '',
                  role: '',
                  namePreviousRole: '',
                  salary: '',
                  salaryNew: '',
                  salaryPrevious: '',
                  status: '',
                  statusNewRole: '',
                  submitterId: this.props.authUser.uid,
                  team: '',
                  teamLead: '',
                  teamLeadNew: '',
                  teamLeadPrevious: '',
                }
              }

              onSubmit={ this.handleSubmit }
              validationSchema={ validationSchema }
            >
              {
                props => {
                  return (
                    <NewForm { ...props } />
                  );
                }
              }
            </Formik>
          </Wrapper>
        </Grid>
      </Main>
    );
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

export default enhance( NewFormPage );
