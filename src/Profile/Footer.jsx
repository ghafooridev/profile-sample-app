import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import TheatersIcon from '@material-ui/icons/Theaters';
import BarChart from '@material-ui/icons/BarChart';
import {styles} from "./Style";

const Footer = function () {
	const classes = styles();

	return (
		<div className={classes.Footer}>
			<div>
				<Tooltip title="نظرسنجی">
					<IconButton>
						<BarChart/>
					</IconButton>
				</Tooltip>
				<Tooltip title="فیلم">
					<IconButton>
						<TheatersIcon/>
					</IconButton>
				</Tooltip>
				<Tooltip title="عکس">
					<IconButton>
						<InsertPhotoIcon/>
					</IconButton>
				</Tooltip>
			</div>
			<Button
				color='primary'
				variant="contained"
				classes={{root: classes.publishButton}}
			>
				انتشار
			</Button>
		</div>
	)
}

export default Footer