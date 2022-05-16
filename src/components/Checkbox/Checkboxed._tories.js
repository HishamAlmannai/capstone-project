import React from 'react';
import Checkbox from './Checkbox';

export default {
	title: 'CehkBox',
	component: Checkbox,
	done: true,
};

function Template(args) {
	return <Checkbox {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
	done: false,
};
