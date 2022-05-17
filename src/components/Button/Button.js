import React from 'react';

export default function Button(props) {
	return (
		<button
			type="submit"
			name="Button"
			onClick={() => {
				props.handleSubmit;
			}}
		>
			{props.buttonText}
		</button>
	);
}
