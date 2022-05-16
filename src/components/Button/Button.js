import React from 'react';

import { useState } from 'react';

export default function Button() {
	const [inputValue, setInputValue] = useState('');

	return (
		<button
			type="submit"
			name="Button"
			value={inputValue}
			onClick={event => {
				setInputValue(event.target.value);
			}}
		>
			Save
		</button>
	);
}
