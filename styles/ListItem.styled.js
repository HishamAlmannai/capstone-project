import styled from 'styled-components';

const StyledListItem = styled.li`
	transform: translateY(0);
	margin-top: -10px;
	&:first-child {
	}
	&:hover {
		transform: translateY(-5px);
	}
`;

export default StyledListItem;
