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
					doneDate: '2021-04-11',
					startDate: '0010-03-09',
				},
				{
					id: nanoid(),
					name: 'If a task has already been done, the checkbox should be checked',
					done: false,
					dueDate: '2025-03-12',
					doneDate: '2022-04-11',
					startDate: '2000-03-09',
				},
				{
					id: nanoid(),
					name: 'Each task should be visually separated',
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2024-04-11',
					startDate: '0150-03-09',
				},
				{
					id: nanoid(),
					name: "Each task should display it's own checkbox",
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2023-04-11',
					startDate: '0100-03-09',
				},

				{
					id: nanoid(),
					name: 'All tasks should be displayed in vertical order',
					done: true,
					dueDate: '2026-03-12',
					doneDate: '2020-04-11',
					startDate: '1111-03-09',
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
								startDate: new Date(),
								dueDate,
								doneDate: '',
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
							task.id === id
								? { ...task, done: !task.done, doneDate: new Date() }
								: task
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
