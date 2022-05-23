import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
	it('renders a checkbox and checks it', () => {
		render(<Checkbox task={{ id: '1k3Ipsv5gtPHkap5qKWjW' }} />);

		const checkboxItem = screen.getByRole('checkbox');

		fireEvent.click(checkboxItem);

		expect(checkboxItem.checked).toBe(true);
	});
});
