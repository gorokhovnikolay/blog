export const deletePostAsynk = (serverRequest, id) => () =>
	serverRequest('fetchDeletePost', id);
