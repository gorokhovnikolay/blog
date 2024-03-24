export const fetchPostAsync = (serverRequest, postId) => (dispatch) => {
	Promise.all([
		serverRequest('fetchPost', postId),
		serverRequest('fetchComments', postId),
	]).then(([postRes, commentsRes]) => {
		dispatch({
			type: 'GET_POST',
			payload: { ...postRes.res, comments: commentsRes.res },
		});
	});
};
