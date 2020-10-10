import {makeStyles} from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
	imageContent: {
		position: 'relative',
		flex: '50%',
		padding: 5
	},
	image: {
		borderRadius: 15,
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	RemoveIcon: {
		position: 'absolute',
		top: 5,
		right: 5,
		color: `${theme.palette.secondary.main} !important`,
	}
}));
