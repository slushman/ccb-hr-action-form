import React from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';
import styled from 'styled-components';

const InputWrap = styled.div`
  margin-bottom: 1.5em;
`;
InputWrap.displayName = 'InputWrap';

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
InputLabel.displayName = 'InputLabel';

const InputElement = styled(FastField)`
  border: 1px solid #ccc;
  border-radius: 0.25em;
  display: block;
  font-size: 16px;
  margin-bottom: 1.5em;
  padding: 0.5rem;
  width: 100%;
`;
InputElement.displayName = 'InputElement';

class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    const {
      id,
      label,
      name,
      handleBlur,
      handleChange,
      placeholder,
      readOnly,
      type,
      value,
    } = this.props;
    return (
      <InputWrap>
        <InputLabel>{label}</InputLabel>
        <InputElement
          className={'text-input'}
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          readOnly={ readOnly }
          type={type}
          value={value}
        />
      </InputWrap>
    );
  }
}

export default Input;
