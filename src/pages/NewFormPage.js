import React from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import dayjs from 'dayjs';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { Main, Grid, Wrapper } from '../styles';
import * as ROUTES from '../constants/routes';
import NewForm from '../components/NewForm/NewForm';
import NavBar from '../components/Navigation/NavBar';
import { validationSchema } from '../components/NewForm/validationSchema';

class NewFormPage extends React.Component {

  handleSubmit = (values, { setSubmitting } ) => {
    this.props.firestore.add( 'forms',
      {
        ...values,
        dateFormStatusCEO: '',
        dateFormStatusFinance: '',
        dateFormStatusHR: '',
        dateFormStatusLT: '',
        formStatusCEO: '',
        formStatusFinance: '',
        formStatusHR: '',
        formStatusLT: '',
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
                  approvalsCEO: 'don-harms',
                  approvalsFacilities: 'john-zabka',
                  approvalsFinance: 'someone?',
                  approvalsHR: 'sondra-calhoun',
                  approvalsIT: 'joe-donnellon',
                  approvalsLT: '',
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
