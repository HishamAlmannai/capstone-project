import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../../pages';
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
		render(<Home />);

		const iItem = screen.getByRole('textbox');
		const bItem = screen.getByRole('button');
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

		const iItem = screen.getByRole('textbox');
		const bItem = screen.getByRole('button');
		const nText = 'wasd';
		const lItem = screen.getAllByRole('listitem');
		const lCount = lItem.length;

		userEvent.type(iItem, nText);
		userEvent.click(bItem);

		const nTask = screen.getByText(nText);
		expect(nTask).toBeInTheDocument();

		const nlItem = screen.getAllByRole('listitem');
		expect(nlItem).toHaveLength(lCount + 1);
	});
	it('submits form data with no string', () => {
		const { container } = render(<Form />);
		const foo = container.querySelector('input:invalid');
		console.log(foo);
		const bItem = screen.getByRole('button');
		userEvent.click(bItem);
		const bar = container.querySelector('input:invalid');
		console.log(bar);
	});
});
