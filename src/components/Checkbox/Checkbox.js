import React from 'react';
import StyledCheckbox from '../../../styles/Checkbox.styled';
import useStore from '../../services/useStore';

export default function Checkbox(props) {
	const id = props.task.id;
	const tasks = useStore(state => state.tasks);
	const done = tasks.find(element => element.id === id).done;
	const check = useStore(state => state.checkTask);

	return (
		<StyledCheckbox
			type="checkbox"
			name="checkbox"
			checked={done}
			onChange={() => {
				check(id);
			}}
		/>
	);
}
