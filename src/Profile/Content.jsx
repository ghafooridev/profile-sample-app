import React from 'react';

import TextField from '@material-ui/core/TextField';
import {styles} from "./Style";

const Content = function () {
	const classes = styles();

	return (
		<div className={classes.content}>
			<TextField
				placeholder="عنوان مطلب"
				variant="outlined"
				InputProps={{
					classes: {
						root: classes.cssOutlinedInput,
						focused: classes.cssFocused,
						notchedOutline: classes.notchedOutline,
					},
				}}
				inputProps={{
					className:classes.titleInput
				}}
			/>
			<TextField
				placeholder="متن مورد نظر خود را تایپ کنید"
				variant="outlined"
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
					className:classes.descriptionInput
				}}
			/>
		</div>
	)
}

export default Content