import styled from 'styled-components';

const StyledListItem = styled.li`
	transform: translateY(0);
	margin-top: -10px;
	transition: all 150ms;
	&:first-child {
	}
	&:hover {
		transform: translateY(-5px);
	}
`;

export default StyledListItem;
