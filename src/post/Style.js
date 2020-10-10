import {makeStyles} from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
	Main: {
		display: 'flex',
		flexDirection: 'column',
		padding: 15
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},
	titleInput: {
		fontSize: '24px !important',

	},
	descriptionInput: {},

	cssOutlinedInput: {
		'&$cssFocused $notchedOutline': {
			border: `1px solid ${theme.palette.primary.main} !important`,
		}
	},
	cssFocused: {},
	notchedOutline: {
		border: 'none !important'
	},

	Footer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1,
		marginTop: 10,
		borderTop: `1px solid ${theme.palette.grey[200]}`,
		bottom: 0,
		right: 10,
		left: 28,
		position: 'fixed',
		backgroundColor: theme.palette.common.white,
		padding: '5px 0'
	},
	publishButton: {
		color: theme.palette.common.white
	}
}));
