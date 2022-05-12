import React from 'react';
import CheckboxStyled from '../../styles/Checkbox.styled';

export default function Checkbox({ props }) {
	return <CheckboxStyled type="checkbox" id={props.id} name={props.name} checked={props.done} />;
}
