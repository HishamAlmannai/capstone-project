import React, { useState } from 'react';
import StyledListItem from '../../../styles/ListItem.styled';
import useStore from '../../services/useStore';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Form from '../Form/Form';

export default function Task(props) {
	const deleteTask = useStore(state => state.deleteTask);
	const [editMode, setEditMode] = useState(false);

	return (
		<StyledListItem role="listitem">
			<Checkbox role="checkbox" task={props.task} />
			{editMode ? (
				<Form />
			) : (
				<>
					<span>{props.task.name}</span>
					<Button
						name="Button"
						onClick={() => {
							setEditMode(true);
						}}
					>
						edit
					</Button>
				</>
			)}
			<Button
				name="Button"
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
