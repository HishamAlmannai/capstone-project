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
					dueDate: '2025-03-12',
				},
				{
					id: nanoid(),
					name: 'If a task has already been done, the checkbox should be checked',
					done: false,
					dueDate: '2025-03-12',
				},
				{
					id: nanoid(),
					name: 'Each task should be visually separated',
					done: true,
					dueDate: '2025-03-12',
				},
				{
					id: nanoid(),
					name: "Each task should display it's own checkbox",
					done: true,

					dueDate: '2025-03-12',
				},

				{
					id: nanoid(),
					name: 'All tasks should be displayed in vertical order',
					done: true,

					dueDate: '2025-03-12',
				},
			],
			archive: [],

			addTask: (task, dueDate) => {
				set(state => {
					return {
						tasks: [
							{
								id: nanoid(),
								name: task,
								done: false,
								dueDate,
							},
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
						archive: state.tasks.filter(task => task.done),
						tasks: state.tasks.filter(task => !task.done),
					};
				});
			},
			updateTask: (id, name, dueDate) => {
				set(state => {
					return {
						tasks: state.tasks.map(task =>
							task.id === id ? { ...task, name, dueDate } : task
						),
					};
				});
			},
		}),
		{ name: 'local tasks' }
	)
);

export default useStore;
