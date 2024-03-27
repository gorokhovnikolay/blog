import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks/useServerRequest';
import { fetchPostAsync, fetchCreateNewCommentAsync } from '../../store/actions';
import { PostContent, Comments, PostContentEdit } from './components';
import { deletePostAsynk } from '../../store/actions';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

const PostContainer = ({ className }) => {
	const [isFlar, setIsFlag] = useState(true);
	const { postId } = useParams();
	const postEdit = useMatch('/post/:postId/edit');
	const newPost = useMatch('/post');
	const dispatch = useDispatch();
	const serverRequest = useServerRequest();
	const navigation = useNavigate();

	useLayoutEffect(() => {
		dispatch({ type: 'RESET_POST_DATA' });
	}, [dispatch, newPost]);

	useEffect(() => {
		if (newPost) {
			return;
		}
		dispatch(fetchPostAsync(serverRequest, postId));
	}, [dispatch, serverRequest, postId, isFlar, newPost]);

	const createNewComment = (newComment) => {
		if (newComment !== '') {
			dispatch(
				fetchCreateNewCommentAsync(serverRequest, newComment, postId, setIsFlag),
			);
		}
	};
	const deletePost = () => {
		dispatch({
			type: 'OPEN_MODAL',
			payload: {
				text: 'Удалить статью???',
				onComfirm: () => {
					dispatch(deletePostAsynk(serverRequest, postId)).then(() =>
						navigation('/'),
					);
					dispatch({ type: 'CLOSED_MODAL' });
				},
				onCancel: () => dispatch({ type: 'CLOSED_MODAL' }),
			},
		});
	};

	return (
		<div className={className}>
			{!postEdit & !newPost ? (
				<>
					<PostContent postId={postId} deletePost={deletePost} />
					<Comments createNewComment={createNewComment} />
				</>
			) : (
				<PostContentEdit deletePost={deletePost} />
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin-top: 40px;
`;
