import styled from 'styled-components';
import { User } from '../../components/User/User';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks/useServerRequest';
import { Content } from '../../components';

const UsersContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [isReset, setIsReset] = useState(true);

	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setError(usersRes.error || rolesRes.error);
					return;
				}
				setError(null);
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, isReset]);

	const deleteUser = (userId) => {
		requestServer('fetchDeleteUser', userId);
		setIsReset((prev) => !prev);
	};

	return (
		<div className={className}>
			<Content error={error}>
				<h2>Пользаватели</h2>
				<div className="table-header">
					<div className="table-row__login">Логин</div>
					<div className="table-row__registred">Дата регистрации</div>
					<div className="table-row__role">Роль</div>
				</div>
				{users.map(({ id, login, registred_at, role_id }) => (
					<User
						key={id}
						login={login}
						registredAt={registred_at}
						roleId={role_id}
						id={id}
						roles={roles.filter(({ id }) => id !== '3')}
						deleteUser={deleteUser}
					/>
				))}
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	max-width: 500px;
	margin: auto;
	& .table-header,
	.table-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	& .table-row__user {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding-top: 3px;
		padding-bottom: 3px;
		border: 1px solid gray;
		border-radius: 8px;
		margin: 2px 0 2px 0;
	}
	& .table-row__login,
	.table-row__registred,
	.table-row__role {
		width: 33%;
		text-align: start;
		padding-left: 5px;
	}
	& .table-row__role {
		display: flex;
	}
`;
