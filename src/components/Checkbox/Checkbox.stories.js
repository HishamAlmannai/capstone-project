import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

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

export default props;

export function Default() {
	return <Checkbox {...props} />;
}
export function checked() {
	return <Checkbox {...propsTrue} />;
}
