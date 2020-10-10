import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/ExpandMore';

import {styles} from './Style';

const Main = function () {
	const categories = ['مدیریت محصول', 'طراحی محصول', 'هنر'];

	const classes = styles()
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedValue, setSelectedValue] = useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (category) => {
		setAnchorEl(null);
		setSelectedValue(category)
	};

	return (
		<div>
			<Button
				classes={{root: classes.button}}
				endIcon={<DeleteIcon/>}
				onClick={handleClick}
			>
				{selectedValue ? selectedValue : 'انتخاب دسته بندی'}
			</Button>
			<Menu
				elevation={0}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
			>
				{categories.map((category, index) =>
					<MenuItem
						key={index}
						onClick={() => handleClose(category)}
					>
						{category}
					</MenuItem>)
				}
			</Menu>
		</div>
	);
}

export default Main
