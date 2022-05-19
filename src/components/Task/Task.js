import React from 'react';
import StyledListItem from '../../../styles/ListItem.styled';
import useStore from '../../services/useStore';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

export default function Task(props) {
	const deleteTask = useStore(state => state.deleteTask);

	return (
		<StyledListItem role="listitem">
			<Checkbox role="checkbox" task={props.task} />
			<span>{props.task.name}</span>
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
