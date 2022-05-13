import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList', () => {
	it('renders a tasks and checkboxes', () => {
		render(
			<TaskList
				props={[
					{ id: 1, name: 'The tasks are displayed, labeled by "ToDo:"', done: true },
					{
						id: 2,
						name: 'If a task has already been done, the checkbox should be checked',
						done: false,
					},
					{ id: 3, name: 'Each task should be visually separated', done: true },
					{ id: 4, name: "Each task should display it's own checkbox", done: true },
					{ id: 5, name: 'All tasks should be displayed in vertical order', done: true },
				]}
			/>
		);

		const litem = screen.getAllByRole('listitem');

		expect(litem.length) === 5;
	});
});
