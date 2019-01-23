import React, { Component } from 'react';
import { FastField } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectWrap = styled.div`
  margin-bottom: 1.5em;
`;
SelectWrap.displayName = 'SelectWrap';

const SelectLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
SelectLabel.displayName= 'SelectLabel';

const StyledSelect = styled(FastField)`
  border: 1px solid #ccc;
  border-radius: 0.25em;
  display: block;
  font-size: 16px;
  margin-bottom: 1.5em;
  padding: 0.5rem;
  width: 100%;
`;
StyledSelect.displayName = 'StyledSelect';

export class Select extends Component {
  render() {
    const {label, name, options, placeholder} = this.props;
    return (
      <SelectWrap>
        <SelectLabel>{label}</SelectLabel>
        <StyledSelect
          component="select"
          name={name}
        >
          <option value="">{placeholder}</option>
          { 
          options.map((option,i) => (
            <option key={i} value={option.value}>{option.label}</option>
          ))
        }
        </StyledSelect>
      </SelectWrap>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  placeholder: '- Select -',
};
