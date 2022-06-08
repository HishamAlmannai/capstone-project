import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: ${props => (props.editMode ? '0rem' : '1rem')};
	width: ${props => (props.editMode ? '100%' : '95%')};

	&input {
		border-radius: 0.5rem;
	}
`;
