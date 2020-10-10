import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/ExpandMore';
import PlusIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

import {styles} from './Style';
import {func} from "prop-types";

const Main = function ({onSelect}) {
	const categories = ['مدیریت محصول', 'طراحی محصول', 'هنر'];

	const classes = styles()
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedValue, setSelectedValue] = useState(null);
	const [isNewCategory, setIsNewCategory] = useState(false)

	const onClickCategory = function (event) {
		setAnchorEl(event.currentTarget);
	}

	const handleClose = function (category) {
		setAnchorEl(null);
		setSelectedValue(category);
	}

	const onAddCategory = function () {
		setAnchorEl(null);
		setIsNewCategory(true)
	}

	const onCreateCategory = function () {

	}

	useEffect(() => {
		onSelect(selectedValue)
	}, [selectedValue])

	return (
		<div>
			<Button
				classes={{root: classes.button}}
				endIcon={isNewCategory ? <ClearIcon color='primary'/> : <DeleteIcon color='primary'/>}
				onClick={onClickCategory}
			>
				{isNewCategory ? 'دسته بندی جدید' : selectedValue ? selectedValue : 'انتخاب دسته بندی'}
			</Button>
			{isNewCategory ?
				<div>
					<TextField
						placeholder="عنوان دسته بندی"
						variant="outlined"
					/>
					<Button
						color='primary'
						variant="contained"
						onClick={onCreateCategory}
					>
						ایجاد
					</Button>

				</div> :
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
					<div>
						{categories.map((category, index) =>
							<MenuItem
								key={index}
								onClick={() => handleClose(category)}
							>
								{category}
							</MenuItem>)
						}
						<Button
							classes={{root: classes.button}}
							endIcon={<PlusIcon color='primary'/>}
							onClick={onAddCategory}
						>
							دسته بندی جدید
						</Button>
					</div>
				</Menu>}
		</div>
	);
}

export default Main
