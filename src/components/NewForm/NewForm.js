import React from 'react';
import { FastField, Form } from 'formik';
import styled from 'styled-components';

import RequestType from './RequestType';
import NewHireFields from './NewHireFields';
import EmploymentType from './EmploymentType';
import AcquisitionType from './AcquisitionType';
import ResignationTerminationFields from './ResignationTerminationFields';
import RoleChangeFields from './RoleChangeFields';
import TransferPromotionFields from './TransferPromotionFields';
import AddRoleFields from './AddRoleFields';
import NewPositionFields from './NewPositionFields';
import LeaveFields from './LeaveFields';
import EffectiveDate from './EffectiveDate';
import AssociateName from './AssociateName';
import FormName from './FormName';
import AllFormsFields from './AllFormsFields';

import {
  Heading1,
  SubmitButton,
} from '../../styles';

const StyledForm = styled(Form)`
  margin: 0 auto;
  width: 100%;
`;
StyledForm.displayName = 'StyledForm';

class NewForm extends React.Component {
  render() {
    const { values } = this.props;
    return (
      <StyledForm>
        <Heading1>HR Action Form</Heading1>
        <FastField
          name="submitterId"
          type="hidden"
        />
        <FormName {...this.props} />
        <RequestType {...this.props} />
        {
          'employment' === values.requestType &&
            <EmploymentType {...this.props} />
        }
        {
          'employment' === values.requestType &&
          'new-hire' === values.employmentType &&
            <NewHireFields {...this.props} />
        }
        {
          ( 
            ( 'employment' === values.requestType && 
              ( 'rehire' === values.employmentType ||
                'resignation' === values.employmentType ||
                'termination' === values.employmentType
              ) 
            ) ||
            'leave' === values.requestType
           ) &&
            <AssociateName {...this.props} />
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
            <ResignationTerminationFields {...this.props} values={values} />
        }
        {
          'talent-acquisition' === values.requestType &&
            <AcquisitionType {...this.props} />
        }
        {
          'talent-acquisition' === values.requestType &&
          'new-position' === values.acquisitionType &&
            <NewPositionFields {...this.props} values={values} />
        }
        {
          'talent-acquisition' === values.requestType &&
          'fill-position' === values.acquisitionType &&
            <div style={{marginBottom: '1.5em'}}>What fields should appear here?</div>
        }
        {
          'add-role' === values.requestType &&
            <AddRoleFields {...this.props} values={values} />
        }
        {
          'role-change' === values.requestType &&
            <RoleChangeFields {...this.props} values={values} />
        }
        {
          'transfer-promotion' === values.requestType &&
            <TransferPromotionFields {...this.props} values={values} />
        }
        {
          'leave' === values.requestType &&
            <LeaveFields {...this.props} values={values} />
        }
        {
          ( 'employment' === values.requestType || 
            ( 'talent-acquisition' === values.requestType &&
              'fill-position' === values.acquisitionType ) ||
            'leave' === values.requestType || 
            'role-change' === values.requestType || 
            'transfer-promotion' === values.requestType 
          ) &&
            <EffectiveDate {...this.props} />
        }
        {
          '' !== this.props.values.requestType &&
            <AllFormsFields values={values} />
        }
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    );
  }
}

export default NewForm;
