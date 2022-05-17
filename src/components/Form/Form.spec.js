import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
	it('renders a Form with input and button', () => {
		render(<Form />);

		const fItem = screen.getByRole('form');
		const iItem = screen.getByRole('input');
		const bItem = screen.getByRole('button');

		expect(fItem).toBeInTheDocument();
		expect(iItem).toBeInTheDocument();
		expect(bItem).toBeInTheDocument();
	});
});
