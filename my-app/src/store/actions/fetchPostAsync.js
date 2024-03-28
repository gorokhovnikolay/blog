export const fetchPostAsync = (serverRequest, postId) => (dispatch) => {
	Promise.all([
		serverRequest('fetchPost', postId),
		serverRequest('fetchComments', postId),
	]).then(([postRes, commentsRes]) => {
		if (postRes && commentsRes) {
			const { id, content, image_url, publishing_at, title } = postRes.res;
			dispatch({
				type: 'GET_POST',
				payload: {
					id,
					content,
					imageUrl: image_url,
					publishingAt: publishing_at,
					title,
					comments: commentsRes.res,
				},
			});
		}
	});
};
