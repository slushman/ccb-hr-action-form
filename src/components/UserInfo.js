import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export default class UserInfo extends Component {
	
  static propTypes = {
	userInfo: PropTypes.object.isRequired,
  }

  render() {
	  console.log(this.props.userInfo);
	const { userInfo } = this.props;
	return (
		<Grid
			alignContent="center"
			alignItems="center"
			container
			spacing={16}
			wrap="nowrap"
		>
			<Grid item>
				<Avatar
					alt={`${ userInfo.displayName } headshot`}
					classes={{ root: 'MuiAvatar-margin-right-20' }}
					component="span"
					src={userInfo.photoURL}
				/>
			</Grid>
			<Grid item>
				<Typography component="span">Welcome, {userInfo.displayName}</Typography>
			</Grid>
		</Grid>
	)
  }
}

