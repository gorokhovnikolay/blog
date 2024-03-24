import { getPost } from '../api';

export const fetchPost = async (postId) => {
	try {
		const post = await getPost(postId);
		return {
			error: null,
			res: post,
		};
	} catch (error) {
		console.log(error);
	}
};
