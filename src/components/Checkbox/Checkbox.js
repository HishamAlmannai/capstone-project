import React from 'react';
import StyledCheckbox from '../../../styles/Checkbox.styled';
import useStore from '../../services/useStore';

export default function Checkbox(props) {
	const id = props.id;
	const check = useStore(state => state.checkTask);

	const state = useStore.getState().tasks;
	const tasks = useStore(state => state.tasks);
	const getIndex = useStore(state => state.getIndex);
	const index = getIndex(id);
	/*
	const done = tasks[index].done; 

	const getStatus = useStore(state => state.getStatus);
	const status = getStatus(id);
	*/

	return (
		<StyledCheckbox
			type="checkbox"
			name="checkbox"
			checked="true"
			onChange={() => {
				console.log(state);
				console.log(tasks);
				console.log(index);
				check(id);
			}}
		/>
	);
}
