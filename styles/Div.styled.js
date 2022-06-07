import styled from 'styled-components';

export const StyledDiv = styled.div`
	&.task {
		display: grid;
		grid-template-columns: ${props => (props.editMode ? '30px 1fr' : '30px 3fr 1fr')};
		margin: 10px;
	}
	&.edit {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
