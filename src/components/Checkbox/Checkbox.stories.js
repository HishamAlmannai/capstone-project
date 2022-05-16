import React from 'react';
import Checkbox from './Checkbox';

const props = {
	props: {
		done: false,
	},
};

const propsTrue = {
	props: {
		done: true,
	},
};

export function Default() {
	return <Checkbox {...props} />;
}
export function checked() {
	return <Checkbox {...propsTrue} />;
}
