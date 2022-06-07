import React from 'react';
import { StyledButton } from '../../../styles/Button.styled';

const props = {
	buttonText: 'String',
};

export default {
	title: 'components/Button',
};

export function Default() {
	return <StyledButton {...props}>Button</StyledButton>;
}
