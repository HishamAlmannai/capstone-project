import React from 'react';
import StyledCheckbox from '../../../styles/Input.styled';
import useStore from '../../services/useStore';

export default function Checkbox(props) {
	const id = props.task.id;
	const done = props.task.done;

	const check = useStore(state => state.checkTask);

	return (
		<StyledCheckbox
			type="checkbox"
			name="checkbox"
			checked={done}
			onClick={() => {
				check(id);
			}}
		/>
	);
}
