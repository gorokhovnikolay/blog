const initialState = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishingAt: '',
	commentsCount: '',
	comments: [
		{
			id: '',
			autor_id: '',
			content: '',
			publishing_comment_at: '',
			post_id: '',
		},
	],
};

export const postReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'GET_POST':
			return {
				...state,
				...payload,
			};
		case 'ADD_COMMENT':
			return { ...state, comments: [...state.comments, payload] };
		case 'DELETE_COMMENT':
			return {
				...state,
				comments: state.comments.filter(({ id }) => id !== payload),
			};
		default:
			return state;
	}
};
