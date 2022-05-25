import React, { useEffect, useState } from 'react';
import useStore from '../../services/useStore';
import Button from '../Button/Button';

export default function Form({ editMode, exitEditMode, id }) {
	const [inputValue, setInputValue] = useState('');
	const addTask = useStore(state => state.addTask);
	const tasks = useStore(state => state.tasks);
	const updateTask = useStore(state => state.updateTask);

	useEffect(() => {
		if (editMode) {
			const task = tasks.find(element => element.id === id);
			setInputValue(task.name);
		}
	}, []);

	function onSubmit(inputValue, event) {
		event.preventDefault();
		if (tasks.some(task => task.name === inputValue && task.id !== id)) {
			window.confirm('Task already in the list');
		} else {
			if (editMode) {
				updateTask(id, inputValue);
				exitEditMode();
			} else {
				addTask(inputValue);
				setInputValue('');
			}
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
			<input required type="date" />
			<Button type="submit" name="save">
				Save
			</Button>
		</form>
	);
}
