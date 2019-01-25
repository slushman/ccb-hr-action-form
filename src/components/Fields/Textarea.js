import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';
import styled from 'styled-components';

const TextareaWrap = styled.div`
  margin-bottom: 1.5em;
`;
TextareaWrap.displayName = 'TextareaWrap';

const TextareaLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
TextareaLabel.displayName = 'TextareaLabel';

const TextareaElement = styled(FastField)`
  border: 1px solid #ccc;
  border-radius: 0.25em;
  display: block;
  font-size: 16px;
  margin-bottom: 1.5em;
  padding: 0.5rem;
  width: 100%;
`;
TextareaElement.displayName = 'TextareaElement';

class Textarea extends Component {

  static propTypes = {
    cols: PropTypes.number,
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    rows: PropTypes.number,
    value: PropTypes.string,
  };
  
  static defaultProps = {
    cols: 50,
    rows: 10,
  };

  render() {
    const {
      cols,
      id,
      label,
      name,
      handleBlur,
      handleChange,
      rows,
      value,
    } = this.props;
    return (
      <TextareaWrap>
        <TextareaLabel>{label}</TextareaLabel>
        <TextareaElement
          cols={cols}
          component="textarea"
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          rows={rows}
          value={value}
        />
      </TextareaWrap>
    );
  }
}

export default Textarea;
