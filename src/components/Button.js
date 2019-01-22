import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

const ButtonElement = styled.button`
  background-color: #08c;
  border-radius: 5px;
  border-style: none;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.15);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin: 20px 0;
  max-width: 150px;
  outline: none;
  padding: 12px 20px;
`;
ButtonElement.displayName = 'ButtonElement';

export class Button extends Component {
  render() {
    const {
      className,
      isSubmitting,
      label,
      onClick,
      type
    } = this.props;
    const buttonClasses = classNames( className );
    return (
      <ButtonElement
        className={buttonClasses}
        disabled={isSubmitting}
        onClick={onClick}
        type={type}
      >
      {
        label
      }
      </ButtonElement>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  isSubmitting: PropTypes.func,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  label: 'Submit',
  type: 'submit',
};
