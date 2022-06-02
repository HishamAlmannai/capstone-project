import React from 'react';
import useStore from '../../services/useStore';
import Task from '../Task/Task';

export default function TaskList() {
	const tasks = useStore(state => state.tasks);

	return (
		<ul>
			{tasks.map(task => (
				<Task key={task.id} task={task} />
			))}
		</ul>
	);
}
