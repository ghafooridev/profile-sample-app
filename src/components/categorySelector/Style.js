import {makeStyles} from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
	button: {
		backgroundColor: theme.palette.secondary.main,
		minWidth: 150,
		display: 'flex',
		justifyContent: 'space-between'
	}
}));
