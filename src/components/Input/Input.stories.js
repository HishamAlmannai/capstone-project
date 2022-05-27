import React from 'react';
import Input from './Input';

const props = {
	type: 'text',
	name: 'Inputt',
	placeholder: 'anyKey',
};

export default {
	title: 'components/Input',
};

export function Default() {
	return <Input {...props} />;
}

export function date() {
	return <input type="date" />;
}
