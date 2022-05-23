import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from './TaskList';

describe('TaskList', () => {
	it('renders four tasks and four checkboxes', () => {
		render(<TaskList />);

		const listItem = screen.getAllByRole('listitem');

		expect(listItem).toHaveLength(4);
	});
	it('renders four tasks and removes one', async () => {
		render(<TaskList />);

		const listItemBefore = screen.getAllByRole('listitem');
		expect(listItemBefore).toHaveLength(4);

		const buttonItem = screen.getAllByRole('button', { name: /delete/i });
		await userEvent.click(buttonItem[0]);

		const listItemAfter = screen.getAllByRole('listitem');
		expect(listItemAfter).toHaveLength(3);
	});
});
