import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import Avatar from '@material-ui/core/Avatar';

import {
	CenteredGrid,
} from '../styles';

class UserInfo extends React.Component {
	render() {
		const { authUser } = this.props;
		return (
			<CenteredGrid>
				<Avatar
					alt={`${ authUser.displayName } headshot`}
					classes={{ root: 'MuiAvatar-margin-right-20' }}
					component="span"
					src={authUser.photoURL}
				/>
				<span style={ { marginLeft: '1em' } }>Welcome, {authUser.displayName}</span>
			</CenteredGrid>
		)
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

export default enhance( UserInfo );
