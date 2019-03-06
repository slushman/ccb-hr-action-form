import React from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import dayjs from 'dayjs';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { Main, Grid, Wrapper } from '../styles';
import * as ROUTES from '../constants/routes';
import NewForm from '../components/NewForm/NewForm';
import NavBar from '../components/Navigation/NavBar';
import { validationSchema } from '../components/NewForm/validationSchema';

const createApprovalsObj = (values) => {
  const approvals = {};

  approvals.lt = values.approvalsLT;

  if ( values.approvalsHR ) {
    approvals.hr = values.approvalsHR;
    delete values.approvalsHR;
  }

  if ( values.approvalsFinance ) {
    approvals.finance = values.approvalsFinance;
    delete values.approvalsFinance;
  }

  if ( values.approvalsCEO ) {
    approvals.ceo = values.approvalsCEO;
    delete values.approvalsCEO;
  }

  if ( values.approvalsIT ) {
    approvals.it = values.approvalsIT;
    delete values.approvalsIT;
  }

  if ( values.approvalsFacilities ) {
    approvals.facilities = values.approvalsFacilities;
    delete values.approvalsFacilities;
  }

  return { approvals, values };
};

class NewFormPage extends React.Component {

  handleSubmit = (values, { setSubmitting } ) => {
    console.log( values );
    const { approvals, newValues } = createApprovalsObj( values );

    this.props.firebase.push( 'forms',
      {
        ...newValues,
        dateSubmitted: dayjs( new Date() ).format( 'YYYY-MM-DDTHH:mm:ss' ),
        approvals: approvals,
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
  };
};

const enhance = compose(
  withFirebase,
  withRouter,
  connect( mapStateToProps )
);

export default enhance( NewFormPage );
