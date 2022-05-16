import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function Form() {
	function onSubmit() {
		//event.preventDefault();
		console.log('§');
	}

	return (
		<form onSubmit={onSubmit()}>
			<label>Create</label>
			<Input />
			<Button />
		</form>
	);
}
