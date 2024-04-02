import styled from 'styled-components';
import { Input } from '../../../../components';

const SearchContainer = ({ className, onChange, searchPhrase }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				onChange={onChange}
				placeholder="Поиск по заголовку..."
			/>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	margin-top: 40px;
	padding: 0 20px;
`;
