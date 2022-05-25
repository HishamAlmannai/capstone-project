import { userEvent } from '@testing-library/jest-dom';
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
	it('modifies a task', async () => {
		render(
			<Task
				task={{
					id: '1k3Ipsv5gtPHkap5qKWjW',
					name: 'The tasks are displayed, labeled by "ToDo:"',
					done: true,
				}}
			/>
		);

		const editButton = screen.getByRole('button', { name: /edit/i });
		console.log(editButton);
		await userEvent.click(editButton);
		const inputItem = screen.getByRole('input');
		await userEvent.type(inputItem, 'newText');
		const saveButton = screen.getByRole('button', { name: /save/i });
		await userEvent.click(saveButton);
		const Text = screen.queryByText(/newText/i);
		expect(Text).toBeInTheDocument();
	});
});
