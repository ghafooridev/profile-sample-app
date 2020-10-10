import React, {useEffect, useState} from 'react';

import PropType from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/ExpandMore';
import PlusIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

import {styles} from './Style';

const Main = function ({onSelect}) {
	const classes = styles();
	const [categories, setCategories] = useState(['مدیریت محصول', 'طراحی محصول', 'هنر']);
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedValue, setSelectedValue] = useState(null);
	const [isNewCategory, setIsNewCategory] = useState(false);
	const [newCategoryValue, setNewCategoryValue] = useState('');


	const onClickCategory = function (event) {
		setIsNewCategory(false)
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
		if (newCategoryValue.trim().length) {
			setCategories([...categories, newCategoryValue])
			setSelectedValue(newCategoryValue);
			setIsNewCategory(false);
		}
	}

	const onNewCategoryInputChange = function (event) {
		setNewCategoryValue(event.target.value);
	}

	useEffect(() => {
		onSelect(selectedValue)
	}, [selectedValue])

	return (
		<div>
			<Button
				classes={{root: classes.MenuButton}}
				endIcon={isNewCategory ? <ClearIcon color='primary'/> : <DeleteIcon color='primary'/>}
				onClick={onClickCategory}
			>
				{isNewCategory ? 'دسته بندی جدید' : selectedValue ? selectedValue : 'انتخاب دسته بندی'}
			</Button>
			{isNewCategory ?
				<div className={classes.newCategoryContainer}>
					<TextField
						placeholder="عنوان دسته بندی"
						variant="outlined"
						size="small"
						inputProps={{
							className: classes.newCategoryInput
						}}
						onChange={onNewCategoryInputChange}
					/>
					<Button
						color='primary'
						variant="contained"
						size='small'
						onClick={onCreateCategory}
						classes={{root: classes.createButton}}
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
							classes={{root: classes.MenuButton}}
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

Main.propTypes = {
	onSelect: PropType.func,
};

export default Main
