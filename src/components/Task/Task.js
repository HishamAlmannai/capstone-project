import { format } from 'date-fns';
import React, { useState } from 'react';
import StyledListItem from '../../../styles/ListItem.styled';
import useStore from '../../services/useStore';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Form from '../Form/Form';

export default function Task(props) {
	const deleteTask = useStore(state => state.deleteTask);
	const [editMode, setEditMode] = useState('');
	const exitEditMode = () => {
		setEditMode(false);
	};
	const formatDueDate = format(new Date(props.task.dueDate), 'dd/MM/yyyy');

	return (
		<StyledListItem role="listitem">
			<Checkbox task={props.task} />
			{editMode ? (
				<Form editMode id={props.task.id} exitEditMode={exitEditMode} />
			) : (
				<>
					<span>{props.task.name}</span>
					<span>{formatDueDate}</span>
					<Button
						name="edit"
						onClick={() => {
							setEditMode(true);
						}}
					>
						Edit
					</Button>
				</>
			)}
			<Button
				name="delete"
				onClick={() => {
					deleteTask(props.task.id);
				}}
			>
				Delete
			</Button>

			<hr />
		</StyledListItem>
	);
}
