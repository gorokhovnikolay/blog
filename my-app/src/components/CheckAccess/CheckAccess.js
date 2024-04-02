import styled from 'styled-components';

const CheckAccessContainer = ({ access, children }) => {
	return access ? (
		children
	) : (
		<div>
			<h2>Ошибка</h2>
			<div>Доступ запрещен</div>
		</div>
	);
};

export const CheckAccess = styled(CheckAccessContainer)``;
