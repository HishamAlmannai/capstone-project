import React from 'react';

import { useState } from 'react';

export default function Input() {
	const [inputValue, setInputValue] = useState('');

	return (
		<input
			type="text"
			name="input"
			placeholder="Stop Starting > Start finishing"
			value={inputValue}
			onChange={event => {
				setInputValue(event.target.value);
			}}
		/>
	);
}
