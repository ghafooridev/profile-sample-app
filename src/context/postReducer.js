const postReducer = (state, action) => {
	const actions = {
		UPDATE_POST: {
			...state,
			...action.payload,
		},
		ADD_FILE: {
			...state,
			files: [...state.files, action.payload]
		},
		REMOVE_FILE: {
			...state,
			files:state.files.filter(item => item.id !== action.payload)
		}
	};

	if (actions[action.type]) {
		return actions[action.type];
	}

	return state;
};

export default postReducer;
