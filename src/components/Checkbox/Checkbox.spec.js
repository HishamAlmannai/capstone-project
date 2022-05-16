import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
	it('renders a checkbox', () => {
		render(<Checkbox task={{ done: false }} />);

		let cItem = screen.getByRole('checkbox');

		fireEvent.click(cItem);

		expect(cItem.checked).toBeTruthy;
	});
});
