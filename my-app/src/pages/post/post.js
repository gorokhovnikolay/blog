import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks/useServerRequest';
import { fetchPostAsync, fetchCreateNewCommentAsync } from '../../store/actions';
import { PostContent, Comments } from './components';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

const PostContainer = ({ className }) => {
	const [isFlar, setIsFlag] = useState(true);
	const { postId } = useParams();
	const dispatch = useDispatch();
	const serverRequest = useServerRequest();

	useEffect(() => {
		dispatch(fetchPostAsync(serverRequest, postId));
	}, [dispatch, serverRequest, postId, isFlar]);

	const createNewComment = (newComment) => {
		if (newComment !== '') {
			dispatch(
				fetchCreateNewCommentAsync(serverRequest, newComment, postId, setIsFlag),
			);
		}
	};

	return (
		<div className={className}>
			<PostContent />
			<Comments createNewComment={createNewComment} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin-top: 40px;
`;
