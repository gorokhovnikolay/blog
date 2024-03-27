import { useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PostContentContainer = ({ className, postId, deletePost }) => {
	const { image_url, title, publishing_at, content } = useSelector(({ post }) => post);
	const navigation = useNavigate();

	return (
		<div className={className}>
			<img src={image_url} alt={title} />
			<div className="post-title"> {title}</div>
			<div className="post-block">
				{publishing_at}
				<div className="post-block__button">
					<Icon
						id={'fa-pencil-square-o'}
						margin={'0 0 0 15px;'}
						onClick={() => navigation(`/post/${postId}/edit`)}
					/>
					<Icon id={'fa-trash'} margin={'0 0 0 15px;'} onClick={deletePost} />
				</div>
			</div>
			<div className="post-content">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 15px 15px 0;
	}
	& .post-title {
		font-size: 20px;
		font-weight: 800;
	}
	& .post-content {
		text-align: justify;
		white-space: break-spaces;
	}
	& .post-block {
		display: flex;
		margin: 15px 0 15px 0;
		justify-content: space-between;
		align-items: center;
	}
	& .post-block__button {
		display: flex;
	}
`;
