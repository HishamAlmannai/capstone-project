import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
	it('renders a form with input and button', () => {
		render(<Form />);

		const iItem = screen.getByRole('textbox');
		const bItem = screen.getByRole('button');
		const fItem = screen.getByRole('form');

		expect(fItem).toBeInTheDocument();
		expect(iItem).toBeInTheDocument();
		expect(bItem).toBeInTheDocument();
	});
	it('submits form data and renders it in list', () => {
		/* const handleChange = jest.fn();
		const handleSubmit = jest.fn(); */
		render(<Form />);

		const iItem = screen.getByRole('textbox');
		const bItem = screen.getByRole('button');
		const text = 'wasd';
		userEvent.type(iItem, text);
		userEvent.click(bItem);
		expect(text).toBeInTheDocument();
		//expect(handleSubmit).toHaveBeenCalledWith();
	});
});
