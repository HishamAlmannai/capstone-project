import styled from 'styled-components';

export const StyledButton = styled.button`
	font-size: 1rem;
	margin: 0.5rem 0 2rem 0;
	background-color: transparent;
	border-radius: 0.75rem;
	padding: 0.5rem;
	width: 100%;

	&.edit {
		margin: 0 0.5rem 0 0.5rem;
	}
	&.footer {
		border-radius: 0, 5rem;
		width: 95%;
		box-shadow: 0 0 1rem 0 #000;
		margin: -10px 0 1rem 0;
		z-index: 10;
		background-color: var(--secondary-background-color);
	}
`;
