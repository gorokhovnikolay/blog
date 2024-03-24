import styled from 'styled-components';
import { Icon } from '../../../../../components';
import { useServerRequest } from '../../../../../hooks/useServerRequest';
import { deleteCommentAsynk } from '../../../../../store/actions';
import { useDispatch } from 'react-redux';

const CommentContainer = ({ className, comment }) => {
	const { id, content, autor_id, publishing_comment_at } = comment;
	const serverRequest = useServerRequest();
	const dispatch = useDispatch();

	const deleteComment = (id) => {
		dispatch({
			type: 'OPEN_MODAL',
			payload: {
				text: 'Удалить комментарий???',
				onComfirm: () => {
					dispatch(deleteCommentAsynk(serverRequest, id));
					dispatch({ type: 'CLOSED_MODAL' });
				},
				onCancel: () => dispatch({ type: 'CLOSED_MODAL' }),
			},
		});
	};

	return (
		<div className={className}>
			<div className="comment-container">
				<div className="comment-header">
					<div>
						<Icon
							id={'fa-user-circle-o'}
							size={'15px'}
							margin={'0 5px 0 0'}
						/>
						{autor_id}
					</div>
					<div>
						<Icon id={'fa-calendar'} size={'15px'} margin={'0 5px 0 0'} />
						{publishing_comment_at}
					</div>
				</div>
				<div className="comment-content">{content}</div>
			</div>
			<div onClick={() => deleteComment(id)}>
				<Icon id={'fa-trash '} margin={'0 5px'} />
			</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	& .comment-container {
		width: 100%;
		border: 1px solid black;
		margin: 5px 0 5px 0;
		padding: 5px;
	}
	& .comment-header {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		margin-bottom: 5px;
	}
	& .comment-content {
		text-align: justify;
	}
	& .comment-header div {
		display: flex;
		align-items: center;
	}
`;
