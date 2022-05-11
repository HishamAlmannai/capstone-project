import React from 'react';
import Checkbox from '../components/Checkbox';

export default {
	title: 'Checkbox',
	component: Checkbox,
};

const props = {
	props: {
		id: 5,
		name: 'All tasks should be displayed in vertical order',
		done: false,
	},
};

export function Default() {
	return <Checkbox {...props} />;
}
export function Checked() {
	return <Checkbox {...props} />;
}
