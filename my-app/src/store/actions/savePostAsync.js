export const savePostAsync = (serverRequest, newPost) => (dispatch) =>
	serverRequest('fetchSavePost', newPost).then((data) => {
		dispatch({ type: 'GET_POST', payload: data.res });
		return data.res;
	});
