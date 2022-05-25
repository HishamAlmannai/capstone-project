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
	it('renders four tasks and removes both done', async () => {
		render(<TaskList />);

		const listItemBefore = screen.getAllByRole('listitem');
		expect(listItemBefore).toHaveLength(4);

		const archiveButton = screen.getByRole('button', { name: /Archive checked/i });
		await userEvent.click(archiveButton);

		const listItemAfter = screen.getAllByRole('listitem');
		expect(listItemAfter).toHaveLength(2);
	});
	it('modifies a task', async () => {
		render(<TaskList />);

		const editButton = screen.getAllByRole('button', { name: /edit/i });
		await userEvent.click(editButton[0]);
		const inputItem = screen.getByRole('textbox');
		await userEvent.clear(inputItem);
		const text = 'whooot';
		await userEvent.type(inputItem, text);
		const saveButton = screen.getByRole('button', { name: /save/i });
		await userEvent.click(saveButton);
		const readText = screen.getByText(text);
		expect(readText).toBeInTheDocument();
	});
});
