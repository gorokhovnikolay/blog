import { getComments, getPosts } from '../api';

export const fetchPosts = async (page, limit) => {
	try {
		const [posts, headers] = await getPosts(page, limit);
		const comments = await getComments();

		const lastPage = headers.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"$/);
		return {
			error: null,
			res: {
				lastPage: Number(lastPage[1]),
				posts: posts.map((post) => {
					const commentsCount = comments.filter((comment) => {
						return post.id === comment.post_id;
					}).length;
					return { ...post, commentsCount };
				}),
			},
		};
	} catch (error) {
		console.log(error);
	}
};
