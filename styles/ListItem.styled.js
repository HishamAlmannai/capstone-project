import styled from 'styled-components';

const StyledListItem = styled.li`
	color: blue;
	transform: translateY(0);
	&:hover {
		transform: translateY(-10px);
	}
`;

export default StyledListItem;
