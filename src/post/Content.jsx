import React, {useContext, useEffect, useState} from 'react';

import TextField from '@material-ui/core/TextField';

import PostContext from '../context/postContext';

import {styles} from './Style';

const Content = function () {
	const classes = styles();
	const [state, setState] = useState({title: null, description: null});
	const {dispatch} = useContext(PostContext);

	const onTextChange = (event) => {
		setState({...state, [event.target.name]: event.target.value});
	};

	useEffect(() => {
		dispatch({
			type: 'UPDATE_POST', payload: state
		});
	}, [state])

	return (
		<div className={classes.content}>
			<TextField
				placeholder="عنوان مطلب"
				variant="outlined"
				name='title'
				onChange={onTextChange}
				InputProps={{
					classes: {
						root: classes.cssOutlinedInput,
						focused: classes.cssFocused,
						notchedOutline: classes.notchedOutline,
					},
				}}
				inputProps={{
					className: classes.titleInput
				}}
			/>
			<TextField
				placeholder="متن مورد نظر خود را تایپ کنید"
				variant="outlined"
				name='description'
				onChange={onTextChange}
				multiline
				rows={4}
				InputProps={{
					classes: {
						root: classes.cssOutlinedInput,
						focused: classes.cssFocused,
						notchedOutline: classes.notchedOutline,
					},
				}}
				inputProps={{
					className: classes.descriptionInput
				}}
			/>
		</div>
	)
}

export default Content