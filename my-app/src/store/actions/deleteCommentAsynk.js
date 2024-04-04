export const deleteCommentAsynk = (serverRequest, id) => (dispatch) => {
	serverRequest('fetchDeleteComment', id).then(({ error }) => {
		if (error) {
			return;
		}
		dispatch({ type: 'DELETE_COMMENT', payload: id });
	});
};
