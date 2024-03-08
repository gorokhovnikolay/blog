import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../Icon/Icon';

const UserBlock = styled.div`
	margin-bottom: 12px;
	text-align: end;
`;
const IconBlock = styled.div`
	display: flex;
	justify-content: space-around;
`;
const ButtonBack = styled.div`
	cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<Link to="/login">
				<UserBlock>
					Вход <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
				</UserBlock>
			</Link>
			<IconBlock>
				<ButtonBack onClick={() => navigate(-1)}>
					<Icon id={'fa-backward'} margin="0 0 0 10px" />
				</ButtonBack>
				<Link to="/post">
					<Icon id={'fa-file-text-o'} margin="0 0 0 10px" />
				</Link>
				<Link to="/users">
					<Icon id={'fa-users'} margin="0 0 0 10px" />
				</Link>
			</IconBlock>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
`;
