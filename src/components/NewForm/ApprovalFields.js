import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import Select from '../Fields/Select';

import {
  Fieldset,
  Legend,
} from '../../styles';
import * as EMAILS from '../../constants/emails';

const approvalOptions = [
  {
    label: 'Aaron Senneff',
    value: EMAILS.AARONSENNEFF,
  },
  {
    label: 'Amanda Williams',
    value: EMAILS.AMANDAWILLIAMS,
  },
  {
    label: 'Heather Sharp',
    value: EMAILS.HEATHERSHARP,
  },
  {
    label: 'Jeff Otero',
    value: EMAILS.JEFFOTERO,
  },
  {
    label: 'Chris Wilcoxson',
    value: 'cwilcoxson@gmail.com',
  },
];

/**
 * Field group appears for all fields, if requestType has a value.
 */
class ApprovalFields extends React.Component {
  static propTypes = {
    values: PropTypes.object.isRequired,
  };

  render() {

    const removeMeFromOptions = (option) => this.props.authUser.email !== option.value; // Don't match the current user email.
    let filteredOptions = R.filter( removeMeFromOptions, approvalOptions ); // Filter out the current user.

    return (
      <Fieldset>
        <Legend>Approvals Needed</Legend>
        <Select
          label="Leadership Team"
          name="responses.LT.contact"
          options={ filteredOptions }
          placeholder="Select leadership team member"
        />
        {/* { ( 'employment' === values.requestType &&
            ( 'new-hire' === values.employmentType ||
              'rehire' === values.employmentType )
          ) &&
          (
            <React.Fragment>
              <Input
                name="approvalsIT"
                type="hidden"
                value="jdonnellon@churchcommunitybuilder.com"
              />
              <Input
                name="approvalsFacilities"
                type="hidden"
                value="jzabka@churchcommunitybuilder.com"
              />
            </React.Fragment>
          )
        } */}
      </Fieldset>
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
  connect( mapStateToProps )
);

export default enhance( ApprovalFields );
