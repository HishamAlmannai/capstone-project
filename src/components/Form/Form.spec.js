import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
	it('renders a Form with input and button', () => {
		render(<Form />);

		const iItem = screen.getByRole('textbox');
		const bItem = screen.getByRole('button');
		const fItem = screen.getByRole('form');

		expect(fItem).toBeInTheDocument();
		expect(iItem).toBeInTheDocument();
		expect(bItem).toBeInTheDocument();
	});
});
