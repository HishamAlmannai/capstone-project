import React from 'react';
import useStore from '../../services/useStore';
import Button from '../Button/Button';
import Task from '../Task/Task';

export default function TaskList() {
	const tasks = useStore(state => state.tasks);
	const archiveTasks = useStore(state => state.archiveTasks);

	return (
		<>
			<ul>
				{tasks.map(task => (
					<Task key={task.id} task={task} />
				))}
			</ul>
			<Button
				onClick={() => {
					archiveTasks();
				}}
			>
				Archive checked
			</Button>
		</>
	);
}
