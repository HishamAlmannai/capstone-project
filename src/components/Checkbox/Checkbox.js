import React from 'react';
import StyledCheckbox from '../../../styles/Checkbox.styled';
import { useState } from 'react';

export default function Checkbox(props) {
	const [checkedValue, setCheckedValue] = useState(props.task.done);

	return (
		<StyledCheckbox
			type="checkbox"
			name="checkbox"
			checked={checkedValue}
			onChange={() => {
				setCheckedValue(!checkedValue);
			}}
		/>
	);
}
