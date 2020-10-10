import React, {useContext} from 'react';

import {v4 as uuid} from 'uuid';

import Button from '@material-ui/core/Button';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import TheatersIcon from '@material-ui/icons/Theaters';
import BarChart from '@material-ui/icons/BarChart';

import CONSTANT from '../utils/constant';
import PostContext from '../context/postContext';

import {styles} from './Style';

const Footer = function () {
	const classes = styles();
	const {data, dispatch} = useContext(PostContext);

	const onChange = function (event) {
		dispatch({
			type: CONSTANT.ACTION_TYPE.ADD_FILE, payload: {id: uuid(), file: event.target.files[0]}
		});
	}

	const onPublish = function () {
		console.log(data)
	}

	return (
		<div className={classes.Footer}>
			<input
				accept="image/*"
				className={classes.input}
				style={{display: 'none'}}
				id="raised-button-file"
				type="file"
				onChange={onChange}
			/>
			<div>
				<Button disabled>
					<BarChart/>
				</Button>
				<Button disabled>
					<TheatersIcon/>
				</Button>
				<label htmlFor="raised-button-file">
					<Button color='primary' component="span">
						<InsertPhotoIcon/>
					</Button>
				</label>
			</div>

			<Button
				color='primary'
				variant="contained"
				classes={{root: classes.publishButton}}
				onClick={onPublish}
			>
				انتشار
			</Button>
		</div>
	)
}

export default Footer