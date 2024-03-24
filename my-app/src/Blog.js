import { Link, Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import { Autorization, Register, Users, Post } from './pages';
import { styled } from 'styled-components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './store/actions';

const Content = styled.div`
	text-align: center;
	padding: 120px 40px;
`;
const App = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: auto;
	min-height: 100%;
	max-width: 1000px;
	margin: 0 auto;
	background: #fff;
`;

export const Blog = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const user = JSON.parse(sessionStorage.getItem('hash'));
		if (user) {
			dispatch(setUser(user));
		}
	}, [dispatch]);

	return (
		<App>
			<Header />
			<Content>
				<Routes>
					<Route path="/login" element={<Autorization />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/"
						element={
							<div>
								<Link to="/post/4">Перейти</Link>
							</div>
						}
					/>
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>new post</div>} />
					<Route path="/post/:postId" element={<Post />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</App>
	);
};
