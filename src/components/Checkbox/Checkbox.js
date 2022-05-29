import React from 'react';
import StyledCheckbox from '../../../styles/Checkbox.styled';
import useStore from '../../services/useStore';

export default function Checkbox({ id, done }) {
	const checkTask = useStore(state => state.checkTask);

	return (
		<StyledCheckbox
			type="checkbox"
			name="checkbox"
			checked={done}
			onClick={() => {
				checkTask(id);
			}}
		/>
	);
}
