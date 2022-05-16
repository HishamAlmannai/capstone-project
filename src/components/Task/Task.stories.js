import React from 'react';
import Task from '../Task/Task';

const props = {
	props: {
		id: 5,
		name: 'All tasks should be displayed in vertical order',
		done: true,
	},
};

export default props;

export function Default() {
	return <Task {...props} />;
}
