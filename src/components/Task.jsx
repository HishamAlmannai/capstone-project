import React from 'react';
import { TaskStyled } from '../../styles/Task.styled';
import Checkbox from './Checkbox';

export default function Task({ props }) {
	return (
		<TaskStyled>
			<Checkbox props={props} />
			<label>{props.name}</label>
			<hr />
		</TaskStyled>
	);
}
