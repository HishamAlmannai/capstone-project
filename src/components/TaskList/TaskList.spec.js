import React from 'react';
import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from './TaskList';

describe('TaskList', () => {
	it('renders five tasks and five checkboxes', () => {
		render(<TaskList />);

		const listItem = screen.getAllByRole('listitem');

		expect(listItem).toHaveLength(5);
	});
	it('renders five tasks and removes one', () => {
		render(<TaskList />);

		const listItemBefore = screen.getAllByRole('listitem');
		expect(listItemBefore).toHaveLength(5);

		const buttonItem = screen.getAllByRole('button', { name: /delete/i });
		userEvent.click(buttonItem[0]);

		const listItemAfter = screen.getAllByRole('listitem');
		expect(listItemAfter).toHaveLength(4);
	});
	it('renders five tasks and removes one and restarts the browser', () => {
		render(<TaskList />);

		const listItemBefore = screen.getAllByRole('listitem');
		expect(listItemBefore).toHaveLength(5);

		const buttonItem = screen.getAllByRole('button', { name: /delete/i });
		userEvent.click(buttonItem[0]);

		window.location.reload(true);

		const listItemAfter = screen.getAllByRole('listitem');
		expect(listItemAfter).toHaveLength(4);
	});
});
