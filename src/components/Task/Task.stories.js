import React from 'react';
import Task from '../Task/Task';

const props = {
	task: {
		id: 5,
		name: 'All tasks should be displayed in vertical order',
		done: true,
	},
};

export default {
	title: 'components/Task',
};

export function Default() {
	return <Task {...props} />;
}
