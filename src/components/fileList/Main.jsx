import React, {useContext, useEffect} from 'react';

import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import PostContext from '../../context/postContext';

import {styles} from './Style';

const Main = function ({source}) {
	const classes = styles();
	const {data,dispatch} = useContext(PostContext);

	const readURL = function () {
		if (source) {
			const reader = new FileReader();

			reader.onload = function (event) {
				document.getElementById(source.id).setAttribute('src', event.target.result);
			};

			reader.readAsDataURL(source.file);
		}
	}

	const onRemoveClick = function (id) {
		dispatch({
			type: 'REMOVE_FILE', payload: id
		});
	}

	useEffect(() => {
		readURL();
	}, [data])

	return (
		<div className={classes.imageContent}>
			<img
				alt={source.file.name}
				id={source.id}
				className={classes.image}
			/>
			<IconButton
				className={classes.RemoveIcon}
				onClick={() => onRemoveClick(source.id)}
			>
				<CancelIcon/>
			</IconButton>
		</div>

	)
}
export default Main
