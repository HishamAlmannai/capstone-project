import React from 'react';

export default function Button(props) {
	return (
		<button
			type={props.type ? 'submit' : 'button'}
			name={props.name}
			className={props.class}
			aria-label={props.name}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
