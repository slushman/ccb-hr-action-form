import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationWrap = styled.div`
  width: 100%;
`;

class Notification extends React.Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return (
      <NotificationWrap>{ this.props.message }</NotificationWrap>
    )
  }
}

export default Notification;
