import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled, { ThemeProvider } from 'styled-components';

import { NewForm } from '../components/NewForm/NewForm';

import { withFirebase } from '../components/Firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const Main = styled.main`
  display: block;
  margin-left: ${ props => props.theme.spacing.unit * 3 }px;
  margin-right: ${ props => props.theme.spacing.unit * 3 }px;
  margin-top: 4em;
  width: auto;
  
  ${ theme.breakpoints.up( 400 + theme.spacing.unit * 3 * 2 ) }{
    margin-left: auto;
    margin-right: auto;
    width: 48rem;
  }
`;

const WrappingPaper = styled(Paper)`
  padding: ${ props => props.theme.spacing.unit * 3}px;
`;

const initialFormikValues = {
  acquisitionType: '',
  dateBirth: '',
  dateClosed: '',
  dateEffective: '',
  dateFilled: '',
  dateHire: '',
  dateLeaveEffective: '',
  dateLeaveReturn: '',
  datePosted: '',
  dateRequested: '',
  employmentType: '',
  flsaClassification: '',
  flsaClassificationNewRole: '',
  flsaClassificationPrevious: '',
  formId: '',
  formName: '',
  hiringLead: '',
  leavePtoHours: '',
  leaveType: '',
  nameAssociate: '',
  nameNewRole: '',
  nameOriginator: '',
  newRate: '',
  notRehirable: '',
  numberOfDays: '',
  otherExplanation: '',
  rehireEligibility: '',
  requestType: '',
  role: '',
  roleNameNew: '',
  roleNamePrevious: '',
  salary: '',
  salaryNew: '',
  salaryPrevious: '',
  status: '',
  statusNewRole: '',
  submitterId: '',
  team: '',
  teamLead: '',
  teamLeadNew: '',
  teamLeadPrevious: '',
};

const validationSchema = Yup.object().shape({
  dateBirth: Yup.date().default(function(){
    return new Date();
  }),
  dateClosed: Yup.date().default(function(){
    return new Date();
  }),
  dateEffective: Yup.date().default(function(){
    return new Date();
  }),
  dateFilled: Yup.date().default(function(){
    return new Date();
  }),
  dateHire: Yup.date().default(function(){
    return new Date();
  }),
  dateLeaveEffective: Yup.date().default(function(){
    return new Date();
  }),
  dateLeaveReturn: Yup.date().default(function(){
    return new Date();
  }),
  datePosted: Yup.date().default(function(){
    return new Date();
  }),
  dateRequested: Yup.date().default(function(){
    return new Date();
  }),
  formId: Yup.string(),
  formName: Yup.string(),
  hiringLead: Yup.string(),
  leavePtoHours: Yup.string(),
  nameAssociate: Yup.string(),
  nameNewRole: Yup.string(),
  nameOriginator: Yup.string(),
  newRate: Yup.string(),
  notRehirable: Yup.string(),
  numberOfDays: Yup.number(),
  otherExplanation: Yup.string(),
  role: Yup.string(),
  roleNameNew: Yup.string(),
  roleNamePrevious: Yup.string(),
  salary: Yup.string(),
  salaryNew: Yup.string(),
  salaryPrevious: Yup.string(),
  submitterId: Yup.string(),
  team: Yup.string(),
  teamLead: Yup.string(),
  teamLeadNew: Yup.string(),
  teamLeadPrevious: Yup.string(),
});

/**
 * UUID assigned as a initial value for formId because
 * if it was set as the value attribute on creation, it 
 * wouldn't submit with the form: https://github.com/jaredpalmer/formik/issues/1202
 */
class NewFormPage extends Component {

  componentDidMount() {
    this.props.setTitle('New HR Action Form');
  }

  render() {
    console.log(this.props.firebase);
    const { firebase } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <CssBaseline />
          <Grid item xs={ 12 }>
            <WrappingPaper>
              <Formik
                initialValues={initialFormikValues}
                onSubmit={(values, {setSubmitting}) => {
                  console.log(values);
                  firebase.db.collection('forms')
                    .add(values)
                    .then(
                      setTimeout(() => {
                        alert('Form submitted!');
                        setSubmitting(false);
                      }, 250)
                    )
                    .catch( function ( error ) {
                      console.error( 'Error adding document: ', error);
                    })
                  
                  
                }}
                validationSchema={validationSchema}
              >
                {
                  props => {
                    return (
                      <NewForm {...props} />
                    );
                  }
                }
              </Formik>
            </WrappingPaper>
          </Grid>
        </Main>
      </ThemeProvider>
    );
  }
}

export default withFirebase( NewFormPage );
