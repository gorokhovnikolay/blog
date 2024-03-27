import { useDispatch, useSelector } from 'react-redux';
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { sanitizeContent } from '../../utils/sanitizeContent';
import { useServerRequest } from '../../../../hooks/useServerRequest';
import { savePostAsync } from '../../../../store/actions';

const PostContentEditContainer = ({ className, deletePost }) => {
	const { id, image_url, title, publishing_at, content } = useSelector(
		({ post }) => post,
	);
	console.log(image_url, title, content);
	const navigation = useNavigate();

	const imageRef = useRef();
	const titleRef = useRef();
	const contentRef = useRef();

	const dispatch = useDispatch();
	const serverRequest = useServerRequest();

	const onSave = () => {
		const newImageRef = imageRef.current.value;
		const newTitleRef = titleRef.current.value;
		const newContentRef = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(
				serverRequest,
				{
					id,
					newImageRef,
					newTitleRef,
					newContentRef,
				},
				navigation,
			),
		).then(({ id }) => navigation(`/post/${id}`));
	};

	return (
		<div className={className}>
			<Input
				ref={imageRef}
				defaultValue={image_url}
				placeholder="URL изображения"
			/>
			<Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
			<div className="post-block">
				<div>{publishing_at}</div>
				<div className="post-block__button">
					<Icon id={'fa-floppy-o'} margin={'0 0 0 15px;'} onClick={onSave} />

					{publishing_at && (
						<Icon
							id={'fa-trash'}
							margin={'0 0 0 15px;'}
							onClick={deletePost}
						/>
					)}
				</div>
			</div>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-content"
			>
				{content}
			</div>
		</div>
	);
};

export const PostContentEdit = styled(PostContentEditContainer)`
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
		min-height: 80px;
		border: solid 1px #a1a1a1;
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
