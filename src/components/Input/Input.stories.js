import React from 'react';
import { StyledInput } from '../../../styles/Input.styled';

const props = {
	type: 'text',
	name: 'Inputt',
	placeholder: 'anyKey',
};

export default {
	title: 'components/Input',
};

export function Default() {
	return <StyledInput {...props} />;
}

export function date() {
	return <StyledInput type="date" />;
}
