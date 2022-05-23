import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Task from './Task';

describe('Task', () => {
	it('renders a task and checkbox', () => {
		render(
			<Task
				task={{
					id: '1k3Ipsv5gtPHkap5qKWjW',
					name: 'The tasks are displayed, labeled by "ToDo:"',
					done: true,
				}}
			/>
		);

		const checkboxItem = screen.getByRole('checkbox');
		const listItem = screen.getByRole('listitem');
		const Text = screen.queryByText(/The tasks are displayed, labeled by "ToDo:"/i);

		expect(checkboxItem).toBeInTheDocument();
		expect(listItem).toBeInTheDocument();
		expect(Text).toBeInTheDocument();
	});
});
