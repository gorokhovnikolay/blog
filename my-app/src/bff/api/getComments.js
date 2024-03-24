export const getComments = async (postId) => {
	const post = await fetch(`http://localhost:3003/comments?post_id=${postId}`).then(
		(data) => {
			return data.json();
		},
	);

	return post;
};
