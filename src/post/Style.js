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
		flex: 1,
		justifyContent: 'space-between',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},
	titleInput: {
		fontSize: '24px !important',
	},
	outlinedInput: {
		'&$cssFocused $notchedOutline': {
			border: `1px solid ${theme.palette.primary.main} !important`,
		}
	},
	cssFocused: {},
	notchedOutline: {
		border: 'none !important'
	},
	Footer: {
		alignItems: 'center',
		backgroundColor: theme.palette.common.white,
		borderTop: `1px solid ${theme.palette.grey[200]}`,
		bottom: 0,
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		left: 28,
		marginTop: 10,
		padding: '5px 0',
		position: 'fixed',
		right: 10
	},
	publishButton: {
		color: theme.palette.common.white
	}
}));
