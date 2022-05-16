import React from 'react';
import Task from '../Task/Task';
import { data } from '../../lib/data';

export default function TaskList() {
	return (
		<ul>
			{data.map(task => (
				<Task key={task.id} task={task} />
			))}
		</ul>
	);
}
