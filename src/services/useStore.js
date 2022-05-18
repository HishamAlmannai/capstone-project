import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => ({
	tasks: [
		{ id: nanoid(), name: 'The tasks are displayed, labeled by "ToDo:"', done: true },
		{
			id: nanoid(),
			name: 'If a task has already been done, the checkbox should be checked',
			done: false,
		},
		{ id: nanoid(), name: 'Each task should be visually separated', done: true },
		{ id: nanoid(), name: "Each task should display it's own checkbox", done: true },

		{ id: nanoid(), name: 'All tasks should be displayed in vertical order', done: true },
	],

	addTask: task => {
		set(state => {
			return {
				tasks: [{ id: nanoid(), name: task, done: false }, ...state.tasks],
			};
		});
	},
}));

export default useStore;
