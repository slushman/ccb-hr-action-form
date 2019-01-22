import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';
import styled from 'styled-components';
import moment from 'moment';
//import DatePicker from 'react-date-picker';

const InputWrap = styled.div`
  margin-bottom: 1.5em;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const InputElement = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.25em;
  display: block;
  font-size: 16px;
  margin-bottom: 1.5em;
  padding: 0.5rem;
  width: 100%;
`;

const Error = styled.span`
  color: red;
  font-weight: bold;
`;

export class Date extends Component {

  static contextTypes = {
    formik: PropTypes.shape({}),
  };

  handleChange = momentDate => {
    const { formik } = this.context;
    const { name } = this.props;
    const { value } = momentDate ? momentDate.format() : '';

    formik.setFieldValue(name, value);
    formik.setFieldTouched(name, true);
  }

  render() {
    const {
      id,
      label,
      maxDate,
      minDate,
      name,
      onBlur,
      onChange,
      placeholder,
      type,
      value,
    } = this.props;
    const { formik } = this.context;
    return (
      <InputWrap>
      <InputLabel>{label}</InputLabel>
      <InputElement
        className={'text-input'}
        id={id}
        maxDate={moment(maxDate)}
        minDate={moment(minDate)}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </InputWrap>
    );
  }
}

Date.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Date.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  label: 'Date',
  maxDate: null,
  minDate: null,
  name: '',
  placeholder: '',
};
