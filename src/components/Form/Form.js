import React, { useState } from 'react';
import useStore from '../../services/useStore';
import Button from '../Button/Button';

export default function Form() {
	const [inputValue, setInputValue] = useState('');
	const addTask = useStore(state => state.addTask);
	const tasks = useStore(state => state.tasks);

	function onSubmit(inputValue, event) {
		event.preventDefault();
		if (tasks.some(task => task.name === inputValue)) {
			window.confirm('Task already in the list');
		} else {
			addTask(inputValue);
			setInputValue('');
		}
	}

	return (
		<form
			name="form"
			onSubmit={event => {
				onSubmit(inputValue, event);
			}}
		>
			<input
				required
				type="text"
				minLength="2"
				maxLength="200"
				name="input"
				placeholder="Stop Starting > Start finishing"
				value={inputValue}
				onChange={event => {
					setInputValue(event.target.value);
				}}
			/>
			<Button handleSubmit="handleSubmit" buttonText="Save" />
		</form>
	);
}
