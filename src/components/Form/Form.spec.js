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
	it('submits form data and renders it', async () => {
		render(
			<>
				<Form />
				<TaskList />
			</>
		);

		const inputItem = screen.getByRole('textbox');
		const buttonItem = screen.getByRole('button', { name: /save/i });
		const newText = 'nothing';

		const dateInput = screen.getByLabelText('inputDueDate');
		const newDate = '2025-03-12';
		await userEvent.type(dateInput, newDate);

		await userEvent.type(inputItem, newText);
		await userEvent.click(buttonItem);

		const newTask = screen.getByText(newText);
		expect(newTask).toBeInTheDocument();
	});
	it('submits form data and adds it in list', async () => {
		render(
			<>
				<Form />
				<TaskList />
			</>
		);

		const textInput = screen.getByRole('textbox');
		const newText = 'wasd';
		const listItems = screen.getAllByRole('listitem');
		const listCount = listItems.length;

		await userEvent.type(textInput, newText);
		const buttonItem = screen.getByRole('button', { name: /save/i });
		const dateInput = screen.getByLabelText('inputDueDate');
		const newDate = '2025-03-12';
		await userEvent.type(dateInput, newDate);
		await userEvent.click(buttonItem);

		const newTask = screen.getByText(/was/i);
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
