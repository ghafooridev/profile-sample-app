import React from 'react';

import Avatar from '@material-ui/core/Avatar';

import Main from '../Components/categorySelector'
import AvatarImage from '../assets/images/000.jpg'
import {styles} from './Style';

const Header = function () {
	const classes = styles();

	return (
		<div className={classes.header}>
			<Avatar src={AvatarImage}/>
			<Main/>
		</div>
	)
}

export default Header