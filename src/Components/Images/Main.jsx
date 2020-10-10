import React from 'react';

import {IconButton} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import CancelIcon from '@material-ui/icons/Cancel';

import {styles} from './Style';

const Main = function ({source}) {
	const classes = styles();

	return (
		<div className={classes.imageContent}>
			<img
				className={classes.image}
				src={source}
			/>
			<Tooltip title="حذف">
				<IconButton className={classes.RemoveIcon}>
					<CancelIcon/>
				</IconButton>
			</Tooltip>
		</div>

	)
}
export default Main
