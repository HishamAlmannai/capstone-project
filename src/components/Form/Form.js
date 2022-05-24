import React, { useState } from 'react';
import useStore from '../../services/useStore';
import Button from '../Button/Button';

export default function Form({ editMode, id }) {
	const [inputValue, setInputValue] = useState('');
	const addTask = useStore(state => state.addTask);
	const tasks = useStore(state => state.tasks);

	//const dunno = useCallback(() => {});

	if (editMode) {
		const taskInput = tasks.find(element => element.id === id).name;
		console.log(taskInput);
		setInputValue(taskInput);
	} else {
		console.log('false');
	}

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
			<Button type="submit">Save</Button>
		</form>
	);
}
