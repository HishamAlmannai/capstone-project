import create from 'zustand';
import { nanoid } from 'nanoid';
import { persist } from 'zustand/middleware';

const useStore = create(
	persist(
		set => ({
			tasks: [
				{
					id: nanoid(),
					name: 'The tasks are displayed, labeled by "ToDo:"',
					done: true,
					archive: false,
					dueDate: '2025-03-12',
				},
				{
					id: nanoid(),
					name: 'If a task has already been done, the checkbox should be checked',
					done: false,
					archive: false,
					dueDate: '2025-03-12',
				},
				{
					id: nanoid(),
					name: 'Each task should be visually separated',
					done: true,
					archive: false,
					dueDate: '2025-03-12',
				},
				{
					id: nanoid(),
					name: "Each task should display it's own checkbox",
					done: true,
					archive: false,
					dueDate: '2025-03-12',
				},

				{
					id: nanoid(),
					name: 'All tasks should be displayed in vertical order',
					done: true,
					archive: false,
					dueDate: '2025-03-12',
				},
			],

			addTask: task => {
				set(state => {
					return {
						tasks: [
							{ id: nanoid(), name: task, done: false, archive: false },
							...state.tasks,
						],
					};
				});
			},
			checkTask: id => {
				set(state => {
					return {
						tasks: state.tasks.map(task =>
							task.id === id ? { ...task, done: !task.done } : task
						),
					};
				});
			},

			deleteTask: id => {
				set(state => {
					return {
						tasks: state.tasks.filter(task => task.id !== id),
					};
				});
			},
			archiveTasks: () => {
				set(state => {
					return {
						tasks: state.tasks.map(task =>
							task.done ? { ...task, archive: true } : task
						),
					};
				});
			},
			updateTask: (id, name) => {
				set(state => {
					return {
						tasks: state.tasks.map(task =>
							task.id === id ? { ...task, name: name } : task
						),
					};
				});
			},
		}),
		{ name: 'local tasks' }
	)
);

export default useStore;
