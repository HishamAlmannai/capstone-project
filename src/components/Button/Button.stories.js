import React from 'react';
import Button from './Button';

const props = {
	buttonText: 'String',
};

export default {
	title: 'components/Button',
};

export function Default() {
	return <Button {...props} />;
}
