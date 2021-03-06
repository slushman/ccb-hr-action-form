import React from 'react';
import * as R from 'ramda';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import {
  Fieldset,
  Legend,
} from '../../styles';
import * as EMAILS from '../../constants/emails';
import Textarea from '../Fields/Textarea';
import Select from '../Fields/Select';

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
 * These fields should appear:
 * - when requestType is not empty.
 */
class AllFormsFields extends React.Component {
  render() {
    const removeMeFromOptions = (option) => this.props.authUser.email !== option.value; // Don't match the current user email.
    let filteredOptions = R.filter( removeMeFromOptions, approvalOptions ); // Filter out the current user.
    return (
      <React.Fragment>
        <Textarea
          label="Comments"
          name="comments"
          {...this.props}
        />
        <Fieldset>
          <Legend>Approvals Needed</Legend>
          <Select
            label="Leadership Team"
            name="responses.LT.contact"
            options={ filteredOptions }
            placeholder="Select leadership team member"
          />
        </Fieldset>
      </React.Fragment>
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

export default enhance( AllFormsFields );
