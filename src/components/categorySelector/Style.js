import {makeStyles} from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
	MenuButton: {
		backgroundColor: theme.palette.secondary.main,
		display: 'flex',
		justifyContent: 'space-between',
		overflow: 'hidden',
		width: 150,
	},
	newCategoryContainer: {
		alignItems: 'start',
		display: 'flex',
		flexDirection: 'column',
		marginTop: 10,
		width: 150
	},
	createButton: {
		color: theme.palette.common.white,
		marginTop: 10
	},
	newCategoryInput: {
		fontSize: 12
	}
}));
