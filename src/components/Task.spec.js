import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Task from './Task';

describe('Task', () => {
	it('renders a task and checkbox', () => {
		render(
			<Task
				props={{ id: 1, name: 'The tasks are displayed, labeled by "ToDo:"', done: true }}
			/>
		);
	});
	const test = screen.queryByText(/The tasks are displayed, labeled by "ToDo:"/i);
	//console.log(test);
	expect(test).toBeInTheDocument();
});
