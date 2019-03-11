import React from 'react';
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
 * This field should appear:
 * - when requestType has a value - for all fields
 */
class ApprovalFields extends React.Component {
  render() {
    let filteredOptions = approvalOptions;
    if ( this.props.authUser ) {
      const removeMeFromOptions = (option) => this.props.authUser.email !== option.value; // Don't match the current user email.
      filteredOptions = R.filter( removeMeFromOptions, approvalOptions ); // Filter out the current user.
    }

    return (
      <Fieldset>
        <Legend>Approvals Needed</Legend>
        <Select
          label="Leadership Team"
          name="responses.LT.contact"
          options={ filteredOptions }
          placeholder="Select leadership team member"
        />
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

export const PureApprovalFields = ApprovalFields;

export default enhance( ApprovalFields );
