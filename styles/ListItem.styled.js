import styled from 'styled-components';

const StyledListItem = styled.li`
	list-style-type: none;
	transform: translateY(0);
	margin-top: -1rem;
	transition: all 150ms;
	&:first-child {
	}
	&:hover {
		transform: translateY(-5px);
	}
`;

export default StyledListItem;
