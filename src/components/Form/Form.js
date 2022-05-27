import React, { useEffect, useState } from 'react';
import { StyledDate } from '../../../styles/Input.styled';
import useStore from '../../services/useStore';
import Button from '../Button/Button';

export default function Form({ editMode, exitEditMode, id }) {
	const [inputValue, setInputValue] = useState('');
	const [dueDateValue, setDueDateValue] = useState('');
	const addTask = useStore(state => state.addTask);
	const tasks = useStore(state => state.tasks);
	const updateTask = useStore(state => state.updateTask);

	useEffect(() => {
		if (editMode) {
			const task = tasks.find(element => element.id === id);
			setInputValue(task.name);
			setDueDateValue(task.dueDate);
		}
	}, []);

	function onSubmit(event, inputValue, dueDateValue) {
		if (tasks.some(task => task.name === inputValue && task.id !== id)) {
			window.confirm('Task already in the list');
		} else {
			if (editMode) {
				updateTask(id, inputValue, dueDateValue);
				exitEditMode();
			} else {
				event.preventDefault();
				addTask(inputValue, dueDateValue);
				setInputValue('');
			}
		}
	}

	return (
		<form
			name="form"
			onSubmit={event => {
				onSubmit(event, inputValue, dueDateValue);
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
			<StyledDate
				required
				type="date"
				name="inputDueDate"
				aria-label="inputDueDate"
				placeholder="dd-mm-yyyy"
				value={dueDateValue}
				onChange={event => {
					setDueDateValue(event.target.value);
				}}
			/>
			<Button type="submit" name="save">
				{editMode ? 'Edit' : 'Save'}
			</Button>
		</form>
	);
}
