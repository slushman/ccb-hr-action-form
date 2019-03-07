import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import * as R from 'ramda';
import styled from 'styled-components';

import { fields } from '../../constants/fields';
import FormActions from './FormActions';

import {
  buttonShadows,
  Heading1,
  Heading2,
  HeaderCell,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadRow,
  TableRow,
  WrappingPaper,
} from '../../styles';

const ActionBanner = styled.section`
  ${ buttonShadows }
  margin-bottom: 1.5em;
  padding: 16px;
  text-align: center;
  width: 100%;
`;

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
  };

  componentDidMount() {
    const { form } = this.props;
    let fieldData = R.filter( R.compose( R.not, R.isEmpty), form ); // Remove empty fields
    const removeTheseFields = ['dateFormStatusCEO','dateFormStatusFinance','dateFormStatusHR','dateFormStatusLT','dateSubmitted','formId','formName','formStatus','formStatusCEO','formStatusFinance','formStatusHR','formStatusLT','submitterId' ];
    fieldData = R.omit( removeTheseFields, fieldData ); // removes the specific fields
    fieldData =  Object.entries( fieldData ).map( ( field ) => { // adds the displayOrder for each field
      const fieldInfo = getFieldInfo(field[0]);
      return { ...field, displayOrder: fieldInfo.displayOrder };
    } );
    fieldData = sortByDisplayOrder( fieldData ); // sorts by displayOrder
    this.setState( {
      data: fieldData,
    } );
  }

  render() {
    if ( 1 > this.state.data.length ) {
      return null;
    }
    console.log( this.props.form );
    return (
      <React.Fragment>
        <Heading1>{ this.props.form.formName }</Heading1>
        { 'Approved' !== this.props.form.formStatus && 'Denied' !== this.props.form.formStatus &&
          <ActionBanner>
            <FormActions formInfo={ this.props.form } />
          </ActionBanner>
        }

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
                  const formattedData = maybeFormatDate( field[1], field[0] );
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

        <Heading2>Form Status</Heading2>
        <WrappingPaper>
          <Table>
            <TableHead>
              <TableHeadRow>
                <HeaderCell component="th">Field Name</HeaderCell>
                <HeaderCell component="th">Date</HeaderCell>
                <HeaderCell component="th">Status</HeaderCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Date Submitted</TableCell>
                <TableCell>{ dayjs( this.props.form.dateSubmitted, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                <TableCell>{ this.props.form.formStatus }</TableCell>
              </TableRow>
              { '' !== this.props.form.dateFormStatusHR && '' !== this.props.form.formStatusHR &&
                <TableRow>
                  <TableCell>HR</TableCell>
                  <TableCell>{ dayjs( this.props.form.dateFormStatusHR, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                  <TableCell>{ this.props.form.formStatusHR }</TableCell>
                </TableRow>
              }
              { '' !== this.props.form.dateFormStatusFinance && '' !== this.props.form.formStatusFinance &&
                <TableRow>
                  <TableCell>Finance</TableCell>
                  <TableCell>{ dayjs( this.props.form.dateFormStatusFinance, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                  <TableCell>{ this.props.form.formStatusFinance }</TableCell>
                </TableRow>
              }
              { '' !== this.props.form.dateFormStatusLT && '' !== this.props.form.formStatusLT &&
                <TableRow>
                  <TableCell>Leadership</TableCell>
                  <TableCell>{ dayjs( this.props.form.dateFormStatusLT, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                  <TableCell>{ this.props.form.formStatusLT }</TableCell>
                </TableRow>
              }
              { '' !== this.props.form.dateFormStatusCEO && '' !== this.props.form.formStatusCEO &&
                <TableRow>
                  <TableCell>CEO</TableCell>
                  <TableCell>{ dayjs( this.props.form.dateFormStatusCEO, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                  <TableCell>{ this.props.form.formStatusCEO }</TableCell>
                </TableRow>
              }
              {/*
                form.approvals.map((approval,i) => {
                  return(
                  <TableRow key={ i }>
                    <TableCell>{ approval.type }</TableCell>
                    <TableCell>{ dayjs( approval.timestamp, 'YYYY-MM-DDTHH:mm' ).format( 'M/D/YYYY h:mm A' ) }</TableCell>
                  </TableRow>
                )})
                  */}
            </TableBody>
          </Table>
        </WrappingPaper>
      </React.Fragment>
    );
  }
}

export default ViewForm;
