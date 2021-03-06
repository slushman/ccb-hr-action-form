import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import * as R from 'ramda';
import { compose } from 'recompose';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { fields } from '../../constants/fields';
import { getStatus, waitingOnMe } from '../../functions';
import FormActions from './FormActions';

import {
  Banner,
  Heading1,
  Heading2,
  HeaderCell,
  Paragraph,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadRow,
  TableRow,
  WrappingPaper,
} from '../../styles';

const getFieldInfo = (key) => R.find( R.propEq( 'key', key ) )( fields );

const sortByDisplayOrder = R.sortWith([
  R.ascend(R.prop('displayOrder')),
]);

const maybeFormatDate = (fieldData, fieldKey) => {
  if (fieldKey.startsWith('date')) {
    return dayjs( fieldData, 'YYYY-MM-DD' ).format( 'M/D/YYYY' )
  }
  return fieldData;
}

class ViewForm extends React.Component {

  static propTypes = {
    form: PropTypes.object.isRequired,
  };

  state = {
    data: [],
    waiting: false,
  };

  componentDidMount() {
    const { authUser, form } = this.props;
    let fieldData = R.filter( R.compose( R.not, R.isEmpty), form ); // Remove empty fields
    const removeTheseFields = ['dateSubmitted','formId','formName','responses','submitterId' ];
    fieldData = R.omit( removeTheseFields, fieldData ); // removes the specific fields
    fieldData =  Object.entries( fieldData ).map( ( field ) => { // adds the displayOrder for each field
      const fieldInfo = getFieldInfo(field[0]);
      return { ...field, displayOrder: fieldInfo.displayOrder };
    } );
    fieldData = sortByDisplayOrder( fieldData ); // sorts by displayOrder
    const isWaitingOnMe = waitingOnMe( form, authUser );
    this.setState( {
      data: fieldData,
    } );
    this.setWaiting( isWaitingOnMe );
  }

  setWaiting = (waiting) => {
    this.setState( {
      waiting: waiting,
    } );
  }

  render() {
    if ( 1 > this.state.data.length ) {
      return null;
    }
    const { form } = this.props;
    return (
      <React.Fragment>
        {
          this.state.waiting &&
            <Banner>
              <FormActions formInfo={ form } setWaiting={ this.setWaiting } />
            </Banner>
        }
        <Heading1>{ form.formName }</Heading1>
        <Paragraph>Submitted: { dayjs( form.dateSubmitted, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</Paragraph>

        <Heading2>Form Fields</Heading2>
          <WrappingPaper>
          <Table>
            <TableHead>
              <TableHeadRow>
                <HeaderCell component="th">Field Name</HeaderCell>
                <HeaderCell component="th">Field Value</HeaderCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              {
                this.state.data.map((field,i) => {
                  const fieldInfo = R.find(R.propEq('key', field[0]))(fields);
                  let formattedData = maybeFormatDate( field[1], field[0] );
                  return (
                    <TableRow key={ i }>
                      <TableCell>{ fieldInfo.label }</TableCell>
                      <TableCell>{ formattedData }</TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </WrappingPaper>

        <Heading2>Form Responses</Heading2>
        <WrappingPaper>
          <Table>
            <TableHead>
              <TableHeadRow>
                <HeaderCell component="th">Field Name</HeaderCell>
                <HeaderCell component="th">Date</HeaderCell>
                <HeaderCell component="th">Status</HeaderCell>
                <HeaderCell component="th">Contact</HeaderCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              { 
                form.responses && 
                  Object.entries( form.responses ).map( ( response, i ) => (
                      <TableRow key={ i }>
                        <TableCell>{ response[0] }</TableCell>
                        <TableCell>{ response[1].dateResponse ? dayjs( response[1].dateResponse, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) : '' }</TableCell>
                        <TableCell>{ getStatus( response[1] ) }</TableCell>
                        <TableCell>{ response[1].contact }</TableCell>
                      </TableRow>
                  ) )
              }
            </TableBody>
          </Table>
        </WrappingPaper>
      </React.Fragment>
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
  connect( mapStateToProps )
);

export default enhance( ViewForm );
