import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks/useServerRequest';
import { Pagination, PostCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { debounce } from '../../bff/utils/debounce';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [goSearchPhrase, setGoSearchPhrase] = useState('');
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, goSearchPhrase, PAGINATION_LIMIT).then(
			({ res, error }) => {
				if (error) {
					return;
				}
				setPosts(res.posts);
				setLastPage(res.lastPage);
			},
		);
	}, [requestServer, page, goSearchPhrase]);

	// const debounceFunction = useMemo(() => debounce(setGoSearchPhrase, 2000), []);
	const debounceFunction = useRef(debounce(setGoSearchPhrase, 2000)).current;

	const onChange = ({ target }) => {
		setSearchPhrase(target.value);
		debounceFunction(target.value);
	};

	return (
		<div className={className}>
			<Search onChange={onChange} searchPhrase={searchPhrase} />
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

			{lastPage > 1 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .posts-container {
		display: flex;
		flex-wrap: wrap;
	}
`;
