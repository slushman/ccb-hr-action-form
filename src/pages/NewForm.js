import React, { Component } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { SubmitButton } from '../components/SubmitButton';
import { RequestType } from '../components/RequestType';
import { NewHireFields } from '../components/NewHireFields';
import { EmploymentType } from '../components/EmploymentType';
import { AcquisitionType } from '../components/AcquisitionType';
import { Comments } from '../components/Comments';
import { ResignationTerminationFields } from '../components/ResignationTerminationFields';
import { RoleChangeFields } from '../components/RoleChangeFields';
import { TransferPromotionFields } from '../components/TransferPromotionFields';
import { AddRoleFields } from '../components/AddRoleFields';
import { NewPositionFields } from '../components/NewPositionFields';
import { LeaveFields } from '../components/LeaveFields';
import { MembershipTypesContainer } from '../containers/MembershipTypesContainer';
import { EffectiveDate } from '../components/EffectiveDate';
import { AssociateName } from '../components/AssociateName';

const AppWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 40rem;
`;

const Heading1 = styled.h1``;

const StyledForm = styled(Form)`
  margin: 0 auto;
  width: 100%;
`;

export class NewForm extends Component {

  onSubmit = (values, {setSubmitting}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  render() {
    return (
      <AppWrap>
        <Formik
          initialValues={{
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
            team: '',
            teamLead: '',
            teamLeadNew: '',
            teamLeadPrevious: '',
          }}
          onSubmit={this.onSubmit}
          validationSchema={Yup.object().shape({
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
            hiringLead: Yup.string(),
            leavePtoHours: Yup.string(),
            nameAssociate: Yup.string().required(),
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
            team: Yup.string().required(),
            teamLead: Yup.string().required(),
            teamLeadNew: Yup.string(),
            teamLeadPrevious: Yup.string(),
          })}
          >
          {
            props => {
              const {
                values,
              } = props;
              return (
                <StyledForm>
                  <Heading1>Associate Action Form</Heading1>
                  <RequestType />
                  {
                    'employment' === values.requestType &&
                      <EmploymentType />
                  }
                  {
                    'employment' === values.requestType &&
                    'new-hire' === values.employmentType &&
                      <NewHireFields {...props} />
                  }
                  {
                    'employment' === values.requestType && 
                    ( 'rehire' === values.employmentType ||
                      'resignation' === values.employmentType ||
                      'termination' === values.employmentType
                    ) &&
                      //<MembershipTypesContainer />
                      <AssociateName />

                  }
                  {
                    'employment' === values.requestType &&
                    'rehire' === values.employmentType &&
                      <div style={{marginBottom: '1.5em'}}>What fields should appear here?</div>
                  }
                  {
                    'employment' === values.requestType &&
                    ( 'resignation' === values.employmentType ||
                      'termination' === values.employmentType ) &&
                      <ResignationTerminationFields values={values} />
                  }
                  {
                    'talent-acquisition' === values.requestType &&
                      <AcquisitionType />
                  }
                  {
                    'talent-acquisition' === values.requestType &&
                    'new-position' === values.acquisitionType &&
                      <NewPositionFields values={values} />
                  }
                  {
                    'talent-acquisition' === values.requestType &&
                    'fill-position' === values.acquisitionType &&
                      <div style={{marginBottom: '1.5em'}}>What fields should appear here?</div>
                  }
                  {
                    'add-role' === values.requestType &&
                      <AddRoleFields values={values} />
                  }
                  {
                    'role-change' === values.requestType &&
                      <RoleChangeFields values={values} />
                  }
                  {
                    'transfer-promotion' === values.requestType &&
                      <TransferPromotionFields values={values} />
                  }
                  {
                    'leave' === values.requestType &&
                      <LeaveFields values={values} />
                  }
                  {
                    ( 'employment' === values.requestType || 'leave' === values.requestType || 'role-change' === values.requestType || 'transfer-promotion' === values.requestType ) &&
                      <EffectiveDate />
                  }
                  {
                    '' !== values.requestType &&
                      <Comments />
                  }
                  <SubmitButton />
                </StyledForm>
              );
            }
          }
          </Formik>
      </AppWrap>
    );
  }
}
