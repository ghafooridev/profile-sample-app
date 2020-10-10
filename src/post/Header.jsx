import React, {useContext} from 'react';

import Avatar from '@material-ui/core/Avatar';

import CategorySelector from '../components/categorySelector'
import AvatarImage from '../assets/images/avatar.jpg'
import PostContext from '../context/postContext';

import {styles} from './Style';

const Header = function () {
	const classes = styles();
	const {dispatch} = useContext(PostContext);

	const onSelectCategory = function (category) {
		dispatch({
			type: 'UPDATE_POST', payload: {category}
		});
	}

	return (
		<div className={classes.header}>
			<Avatar src={AvatarImage}/>
			<CategorySelector onSelect={onSelectCategory}/>
		</div>
	)
}

export default Header