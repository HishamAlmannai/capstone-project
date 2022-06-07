import styled from 'styled-components';

export const StyledSpan = styled.span`
	&task {
		margin-top: 0rem;
		width: 60vw;
		word-wrap: break-word;

		&:hover {
			cursor: pointer;
		}
	}

	&.accordion {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 0rem;
		&:hover {
			cursor: pointer;
		}
	}
	&.dueDate {
		margin-left: auto;
	}
`;
