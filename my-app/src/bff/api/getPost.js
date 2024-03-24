export const getPost = async (postId) => {
	const post = await fetch(`http://localhost:3003/posts/${postId}`).then((data) =>
		data.json(),
	);

	return post;
};
