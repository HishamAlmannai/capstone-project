import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList', () => {
	it('renders every task and checkbox of the array', () => {
		render(<TaskList />);
	});
	const spotDetail1 = screen.queryByText(/renders/i);

	expect(spotDetail1).toBeInTheDocument();
});
