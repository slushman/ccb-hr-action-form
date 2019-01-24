import React, { Component } from 'react';
import { FastField, Form } from 'formik';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { RequestType } from '../FieldGroups/RequestType';
import { NewHireFields } from '../FieldGroups/NewHireFields';
import { EmploymentType } from '../FieldGroups/EmploymentType';
import { AcquisitionType } from '../FieldGroups/AcquisitionType';
import { Comments } from '../FieldGroups/Comments';
import { ResignationTerminationFields } from '../FieldGroups/ResignationTerminationFields';
import { RoleChangeFields } from '../FieldGroups/RoleChangeFields';
import { TransferPromotionFields } from '../FieldGroups/TransferPromotionFields';
import { AddRoleFields } from '../FieldGroups/AddRoleFields';
import { NewPositionFields } from '../FieldGroups/NewPositionFields';
import { LeaveFields } from '../FieldGroups/LeaveFields';
import { EffectiveDate } from '../FieldGroups/EffectiveDate';
import { AssociateName } from '../FieldGroups/AssociateName';
import { FormName } from '../FieldGroups/FormName';

import Button from '@material-ui/core/Button';

const Heading1 = styled.h1``;

const StyledForm = styled(Form)`
  margin: 0 auto;
  width: 100%;
`;

/**
 * Unique ID generated in constructor so each page load generates a new one.
 * https://stackoverflow.com/questions/29420835/how-to-generate-unique-ids-for-form-labels-in-react
 */
class NewForm extends Component {

  constructor(props) {
    super(props);
    this.uuid = uuidv4();
  }

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
          'employment' === values.requestType && 
          ( 'rehire' === values.employmentType ||
            'resignation' === values.employmentType ||
            'termination' === values.employmentType
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
          ( 'employment' === values.requestType || 'leave' === values.requestType || 'role-change' === values.requestType || 'transfer-promotion' === values.requestType ) &&
            <EffectiveDate {...this.props} />
        }
        {
          '' !== values.requestType &&
            <Comments {...this.props} />
        }
        <Button
          color="primary"
          type="submit"
          variant="contained"
        >Submit</Button>
      </StyledForm>
    );
  }
}

export { NewForm };
