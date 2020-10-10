import React, {useReducer} from 'react';

import PropType from 'prop-types';

import PostContext from './postContext';
import postReducer from './postReducer';

const PostContextProvider = props => {

	const initValue = {
		category: null,
		title: null,
		description: null,
		files: []
	};

	const {children} = props;
	const [data, dispatch] = useReducer(postReducer, initValue);

	return (
		<PostContext.Provider value={{data, dispatch}}>
			{children}
		</PostContext.Provider>
	);
};

PostContextProvider.propTypes = {
	children: PropType.node.isRequired,
};
export default PostContextProvider;

