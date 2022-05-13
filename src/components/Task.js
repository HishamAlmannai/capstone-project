import React from 'react';
import StyledListItem from '../../styles/ListItem.styled';
import Checkbox from './Checkbox';

export default function Task({ props }) {
	return (
		<StyledListItem role="listitem">
			<Checkbox role="checkbox" props={props} />
			<span>{props.name}</span>
			<hr />
		</StyledListItem>
	);
}
