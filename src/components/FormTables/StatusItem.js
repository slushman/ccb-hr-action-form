import React from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { getStatus } from '../../functions';

const StatusListItem = styled.li`
  margin-left: 0.25em;
  margin-right: 0.25em;
  padding: 0.25em;

  & + & {
    border-left: 1px solid;
    padding-left: 0.5em;
  }
`;

class StatusItem extends React.Component {
  render() {
    return (
      <StatusListItem>{ this.props.label }: { getStatus( this.props.responseInfo ) }</StatusListItem>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    firebase: state.firebase,
  };
};

const enhance = compose(
  withFirestore,
  connect( mapStateToProps )
);

export default enhance( StatusItem );
