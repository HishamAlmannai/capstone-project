import styled from 'styled-components';

export const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 0.75rem;
	background-color: var(--primary-background-color);
	transform: translateY(0);
	width: 100%;
	box-shadow: 0 0 1rem 0 #000;

	&.accordion {
	}

	&.graph {
		padding: 2rem;
		margin-top: -10px;
	}
`;
