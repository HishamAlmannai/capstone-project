export default function TaskList() {
	const data = [
		{ id: 1, name: 'The tasks are displayed, labeled by "ToDo:"', done: true },
		{
			id: 2,
			name: 'If a task has already been done, the checkbox should be checked',
			done: false,
		},
		{ id: 3, name: 'Each task should be visually separated', done: true },
		{ id: 4, name: "Each task should display it's own checkbox", done: true },
		{ id: 5, name: 'All tasks should be displayed in vertical order', done: true },
	];

	return (
		<>
			{data.map(task => (
				<div key={task.id}>
					<input type="checkbox" id="done" name="done" checked={task.done} />
					<label>{task.name}</label>
					<hr />
				</div>
			))}
		</>
	);
}
