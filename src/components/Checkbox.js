import React from 'react';
import StyledCheckbox from '../../styles/Checkbox.styled';

export default function Checkbox({ props }) {
	return <StyledCheckbox type="checkbox" checked={props.done} />;
}
