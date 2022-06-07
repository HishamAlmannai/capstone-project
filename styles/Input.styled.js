import styled from 'styled-components';

export const StyledInput = styled.input`
	font-size: 1rem;
	background-color: var(--secondary-background-color);
	height: 2rem;
	border-radius: 0.5rem;
	margin: 0rem 0 0.5rem 0;
	::placeholder {
		text-align: center;
	}
	:focus {
		outline-color: var(--secondary-color);
	}

	&.textarea {
		font-size: 1rem;
		padding: 0.5rem;
		height: 4rem;
		border-radius: 0.5rem;
		margin: 0rem 0 0.5rem 0;
	}
	&.date {
		border-radius: 0.5rem;
		text-align: center;
	}
`;
