import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../../pages';
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
		render(<Home />);

		const iItem = screen.getByRole('textbox');
		const bItem = screen.getByRole('button');
		const nText = 'wasd';

		userEvent.type(iItem, nText);
		userEvent.click(bItem);

		const nTask = screen.getByText(nText);
		expect(nTask).toBeInTheDocument();

		const litem = screen.getAllByRole('listitem');
		expect(litem).toHaveLength(6);
	});
	it('submits form data with no string', () => {
		render(<Form />);
		const bItem = screen.getByRole('button');
		userEvent.click(bItem);
		screen.debug();
	});
});
