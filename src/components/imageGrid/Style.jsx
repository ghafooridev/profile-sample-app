import {makeStyles} from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
	imageContent: {
		flex: '50%',
		padding: 5,
		position: 'relative',
	},
	image: {
		borderRadius: 15,
		height: '100%',
		objectFit: 'cover',
		width: '100%',
	},
	RemoveIcon: {
		color: `${theme.palette.secondary.main} !important`,
		position: 'absolute',
		right: 5,
		top: 5,
	}
}));
