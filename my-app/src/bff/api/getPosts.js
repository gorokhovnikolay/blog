export const getPosts = async (page, limit) => {
	const url = `http://localhost:3003/posts?_page=${page}&_limit=${limit}`;

	const posts = await fetch(url).then((data) => {
		return Promise.all([data.json(), data.headers.get('Link')]);
	});
	return posts;
};
