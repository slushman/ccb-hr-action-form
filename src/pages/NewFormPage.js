import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled, { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import moment from 'moment';

import NewForm from '../components/NewForm/NewForm';
import { AuthUserContext } from '../components/Session';

import * as ROUTES from '../constants/routes';
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

const validationSchema = Yup.object().shape({
  comments: Yup.string(),
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
  dateLeaveReturn: Yup.date().default(function(){
    return new Date();
  }),
  datePosted: Yup.date().default(function(){
    return new Date();
  }),
  dateRequested: Yup.date().default(function(){
    return new Date();
  }),
  formName: Yup.string(),
  hiringLead: Yup.string(),
  leavePtoHours: Yup.string(),
  nameAssociate: Yup.string(),
  nameNewRole: Yup.string(),
  newRate: Yup.string(),
  notRehirable: Yup.string(),
  numberOfDays: Yup.number(),
  otherExplanation: Yup.string(),
  role: Yup.string(),
  namePreviousRole: Yup.string(),
  salary: Yup.string(),
  salaryNew: Yup.string(),
  salaryPrevious: Yup.string(),
  submitterId: Yup.string(),
  team: Yup.string(),
  teamLead: Yup.string(),
  teamLeadNew: Yup.string(),
  teamLeadPrevious: Yup.string(),
});

class NewFormPageComp extends Component {

  componentDidMount() {
    this.props.setTitle('New HR Action Form');
  }

  render() {
    const { firebase } = this.props;
    return (
      <AuthUserContext.Consumer>
        {
          authUser => (
            <ThemeProvider theme={theme}>
              <Main>
                <CssBaseline />
                <Grid item xs={ 12 }>
                  <WrappingPaper>
                    <Formik
                      initialValues={{
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
                        submitterId: authUser.uid,
                        team: '',
                        teamLead: '',
                        teamLeadNew: '',
                        teamLeadPrevious: '',
                      }}
                      onSubmit={(values, {setSubmitting}) => {
                        firebase.db.collection('forms')
                          .add(
                            {
                              ...values,
                              dateSubmitted: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss')
                            }
                          )
                          .then(() => {
                            this.props.history.push(ROUTES.FORMS);
                            setTimeout(() => {
                              alert('Form submitted!');
                              setSubmitting(false);
                            }, 250)
                          })
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
          )
        }
      </AuthUserContext.Consumer>
    );
  }
}

const NewFormPage = compose(
  withRouter,
  withFirebase,
)( NewFormPageComp );

export { NewFormPage, NewFormPageComp };