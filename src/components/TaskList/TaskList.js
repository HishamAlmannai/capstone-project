import React from 'react';
import useSWR from 'swr';
import Task from '../Task/Task';

export default function TaskList() {
	const { data: tasks, error } = useSWR('/api/tasks');
	if (error) {
		return <p>Error: {error.message}</p>;
	}
	if (!tasks) {
		return <p>loading...</p>;
	}

	return (
		<ul>
			{tasks.map(task => (
				<Task key={task.id} task={task} />
			))}
		</ul>
	);
}
