import React from 'react';
import Task from '../Task/Task';
import useStore from '../../services/useStore';

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
