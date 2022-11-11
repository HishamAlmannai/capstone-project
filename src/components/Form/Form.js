import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { StyledForm } from '../../../styles/Form.styled';
import { StyledInput } from '../../../styles/Input.styled';
import useStore from '../../services/useStore';
import Button from '../Button/Button';

export default function Form({ id, editMode, exitEditMode, handleSubmit }) {
	const [inputValue, setInputValue] = useState('');
	const [dueDateValue, setDueDateValue] = useState('');
	const addTask = useStore(state => state.addTask);
	const updateTask = useStore(state => state.updateTask);

	const { data: tasks, error } = useSWR('/api/tasks');

	useEffect(() => {
		if (editMode) {
			const task = tasks.find(element => element.id === id);
			setInputValue(task.name);
			setDueDateValue(format(new Date(task.dueDate), 'yyyy-MM-dd'));
		}
	}, [editMode, id, tasks]);

	if (error) {
		return <p>Error: {error.message}</p>;
	}
	if (!tasks) {
		return <p>loading...</p>;
	}
	if (handleSubmit) {
		onSubmit(event, inputValue, dueDateValue);
	}

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
				setDueDateValue('');
			}
		}
	}

	return (
		<>
			{' '}
			{editMode ? (
				<StyledForm
					editMode
					name="form"
					widthSelf="50%"
					onSubmit={event => {
						onSubmit(event, inputValue, dueDateValue);
					}}
				>
					<StyledInput
						required
						minLength="2"
						maxLength="200"
						pattern=".*\S+.*"
						name="input"
						type="textarea"
						placeholder="empty"
						value={inputValue}
						onChange={event => {
							setInputValue(event.target.value);
						}}
					/>
					<StyledInput
						required
						type="date"
						name="inputDueDate"
						aria-label="inputDueDate"
						placeholder="Due Date"
						value={dueDateValue}
						onChange={event => {
							setDueDateValue(event.target.value);
						}}
					/>
				</StyledForm>
			) : (
				<StyledForm
					name="form"
					editMode={false}
					onSubmit={event => {
						onSubmit(event, inputValue, dueDateValue);
					}}
				>
					<StyledInput
						required
						type="text"
						minLength="2"
						maxLength="200"
						pattern=".*\S+.*"
						name="input"
						placeholder="Stop Starting > Start finishing"
						value={inputValue}
						onChange={event => {
							setInputValue(event.target.value);
						}}
					/>
					<StyledInput
						required
						type="date"
						name="inputDueDate"
						aria-label="inputDueDate"
						placeholder="Due Date"
						value={dueDateValue}
						onChange={event => {
							setDueDateValue(event.target.value);
						}}
					/>
					{!editMode && (
						<Button type="submit" name="save">
							Save
						</Button>
					)}
				</StyledForm>
			)}
		</>
	);
}
