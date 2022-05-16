import React from 'react';
import StyledListItem from '../../../styles/ListItem.styled';
import Checkbox from '../Checkbox/Checkbox';

export default function Task(props) {
	return (
		<StyledListItem role="listitem">
			<Checkbox role="checkbox" task={props.task} />
			<span>{props.task.name}</span>
			<hr />
		</StyledListItem>
	);
}
