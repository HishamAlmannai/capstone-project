import React from 'react';
import Task from './Task';

const props = {
	task: {
		id: 5,
		name: 'All tasks should be displayed in vertical order',
		done: true,
		archive: false,
		dueDate: '2025-03-12',
	},
};

export default {
	title: 'components/Task',
};

export function Default() {
	return <Task {...props} />;
}
