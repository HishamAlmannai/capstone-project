import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskList from '../TaskList/TaskList';
import Form from './Form';

describe('Form', () => {
	it('renders a form with input and button', () => {
		render(<Form />);

		const fItem = screen.getByRole('form');
		const iItem = screen.getByRole('textbox');
		const bItem = screen.getByRole('button');

		expect(fItem).toBeInTheDocument();
		expect(iItem).toBeInTheDocument();
		expect(bItem).toBeInTheDocument();
	});
	it('submits form data and renders it', () => {
		render(
			<>
				<Form />
				<TaskList />
			</>
		);

		const iItem = screen.getByRole('textbox');
		const bItem = screen.getByRole('button', { name: /save/i });
		const nText = 'wasd';

		userEvent.type(iItem, nText);
		userEvent.click(bItem);

		const nTask = screen.getByText(nText);
		expect(nTask).toBeInTheDocument();
	});
	it('submits form data and adds it in list', () => {
		render(
			<>
				<Form />
				<TaskList />
			</>
		);

		const inputItem = screen.getByRole('textbox');
		const buttonItem = screen.getByRole('button', { name: /save/i });
		const newText = 'wasd';
		const listItems = screen.getAllByRole('listitem');
		const listCount = listItems.length;

		userEvent.type(inputItem, newText);
		userEvent.click(buttonItem);

		const newTask = screen.getByText(newText);
		expect(newTask).toBeInTheDocument();

		const newListItem = screen.getAllByRole('listitem');
		expect(newListItem).toHaveLength(listCount + 1);
	});
	it('submits form data with no string', () => {
		const { container } = render(<Form />);
		const submitButton = screen.getByRole('button');
		userEvent.click(submitButton);
		const inputAfter = container.querySelector('input:invalid');
		expect(inputAfter).toBeTruthy();
	});
});
