import styled from 'styled-components';

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const Icon = styled.svg`
	fill: none;
	stroke: var(--secondary-color);
	stroke-width: 3px;
`;

// Hide checkbox visually but remain accessible to screen readers.

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	opacity: 0%;
	width: 20px;
	height: 20px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
`;

const StyledCheckbox = styled.div`
	display: inline-block;
	width: 20px;
	height: 20px;
	box-shadow: ${props => !props.checked && '0 0 0 2px #e3e3e3'};
	border-radius: 3px;
	transition: all 150ms;

	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px #666666;
	}

	${Icon} {
		visibility: ${props => (props.checked ? 'visible' : 'hidden')};
	}
`;

export { StyledCheckbox, CheckboxContainer, HiddenCheckbox, Icon };
