import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList', () => {
	it('renders five tasks and five checkboxes', () => {
		render(<TaskList />);

		const litem = screen.getAllByRole('listitem');

		expect(litem).toHaveLength(5);
	});
});
