import React from 'react';
import StyledCheckbox from '../../../styles/Checkbox.styled';
import { useState } from 'react';

export default function Checkbox({ props }) {
	const [checkedValue, setCheckedValue] = useState(props.done);

	return (
		<StyledCheckbox
			type="checkbox"
			checked={checkedValue}
			onChange={() => {
				setCheckedValue(!checkedValue);
			}}
		/>
	);
}
