import { format } from 'date-fns';
import React, { useState } from 'react';
import StyledCheckbox from '../../../styles/Checkbox.styled';
import StyledListItem from '../../../styles/ListItem.styled';
import useStore from '../../services/useStore';
import Button from '../Button/Button';
import Form from '../Form/Form';

export default function Task(props) {
	const {
		task: { id, name, done, dueDate },
	} = props;
	const deleteTask = useStore(state => state.deleteTask);
	const [editMode, setEditMode] = useState('');
	const exitEditMode = () => {
		setEditMode(false);
	};
	const checkTask = useStore(state => state.checkTask);

	const formatDueDate = format(new Date(dueDate), 'dd/MM/yyyy');

	return (
		<StyledListItem role="listitem">
			<StyledCheckbox
				type="checkbox"
				name="checkbox"
				checked={done}
				onChange={() => {
					checkTask(id);
				}}
			/>
			{editMode ? (
				<Form editMode id={id} exitEditMode={exitEditMode} />
			) : (
				<>
					<span>{name}</span>
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
					deleteTask(id);
				}}
			>
				Delete
			</Button>
			<hr />
		</StyledListItem>
	);
}
