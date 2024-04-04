export const fetchCreateNewCommentAsync =
	(serverRequest, newComment, postId) => (dispatch) => {
		serverRequest('fetchCreateNewCommentAsync', newComment, postId).then((data) => {
			dispatch({ type: 'ADD_COMMENT', payload: data.res });
		});
	};
