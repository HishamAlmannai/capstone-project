import React from 'react';
import { useState } from 'react';

export default function Input(props) {
	const [inputValue, setInputValue] = useState('');

	return (
		<input
			required
			type={props.type}
			name={props.name}
			placeholder={props.placeholder}
			value={inputValue}
			onChange={event => {
				setInputValue(event.target.value);
			}}
		/>
	);
}
