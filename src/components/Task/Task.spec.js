import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Task from './Task';

describe('Task', () => {
	it('renders a checkbox and task and date', () => {
		render(
			<Task
				task={{
					id: '1k3Ipsv5gtPHkap5qKWjW',
					name: 'The tasks are displayed, labeled by "ToDo:"',
					done: true,
					dueDate: '2025-03-12',
				}}
			/>
		);

		const checkboxItem = screen.getByRole('checkbox');
		const listItem = screen.getByRole('listitem');
		const Text = screen.queryByText(/The tasks are displayed, labeled by "ToDo:"/i);
		const Date = screen.queryByText('12/03/2025');

		expect(checkboxItem).toBeInTheDocument();
		expect(listItem).toBeInTheDocument();
		expect(Text).toBeInTheDocument();
		expect(Date).toBeInTheDocument();
	});
});
