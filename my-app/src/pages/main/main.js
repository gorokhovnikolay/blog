import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks/useServerRequest';
import { Pagination, PostCard } from './components';
import { PAGINATION_LIMIT } from '../../constants';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(({ res, error }) => {
			if (error) {
				return;
			}
			setPosts(res.posts);
			setLastPage(res.lastPage);
		});
	}, [requestServer, page]);

	return (
		<div className={className}>
			<div className="posts-container">
				{posts.map(({ id, title, image_url, publishing_at, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						imageUrl={image_url}
						publishingAt={publishing_at}
						commentsCount={commentsCount}
					/>
				))}
			</div>

			<Pagination page={page} lastPage={lastPage} setPage={setPage} />
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .posts-container {
		display: flex;
		flex-wrap: wrap;
	}
`;
