import React from 'react';
import Task from '../components/Task';

export default {
	title: 'Task',
	component: Task,
};

const props = {
	props: {
		id: 5,
		name: 'All tasks should be displayed in vertical order',
		done: true,
	},
};

export function Default() {
	return <Task {...props} />;
}
export function Checked() {
	return <Task {...props} />;
}
