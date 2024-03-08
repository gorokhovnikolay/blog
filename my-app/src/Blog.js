import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import { Header, Footer } from './components';

const Content = styled.div`
	text-align: center;
	padding: 120px 40px;
`;
const App = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	max-width: 1000px;
	margin: 0 auto;
	background: #fff;
`;

export const Blog = () => {
	return (
		<App>
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
		</App>
	);
};
