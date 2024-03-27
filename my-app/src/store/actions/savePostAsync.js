export const savePostAsync = (serverRequest, newPost, navigation) => (dispatch) =>
	serverRequest('fetchSavePost', newPost).then((data) => {
		dispatch({ type: 'GET_POST', payload: data.res });

		return data.res;
	});
