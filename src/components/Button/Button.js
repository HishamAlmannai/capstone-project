import React from 'react';
import { StyledButton } from '../../../styles/Button.styled';

export default function Button(props) {
	return (
		<StyledButton
			type={props.type ? 'submit' : 'button'}
			name={props.name}
			className={props.class}
			aria-label={props.name}
			onClick={props.onClick}
		>
			{props.children}
		</StyledButton>
	);
}
