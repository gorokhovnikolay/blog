import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

const Content = styled.div`
	text-align: center;
`;
const Header = () => <div>Шапка</div>;

const Footer = () => <div>Подвал</div>;

export const Blog = () => {
	return (
		<>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>Главная</div>} />
					<Route path="/users" element={<div>users</div>} />
					<Route path="/post" element={<div>new post</div>} />
					<Route path="/post/:postId" element={<div>post</div>} />
					<Route path="/login" element={<div>Login</div>} />
					<Route path="/autorized" element={<div>Auth</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	);
};
