import create from 'zustand';
import { nanoid } from 'nanoid';
import { persist } from 'zustand/middleware';

const useStore = create(
	persist(
		set => ({
			/* labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', now],
			datasets: [
				{
					label: '',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
			], */

			tasks: [
				{
					id: nanoid(),
					name: '1 The tasks are displayed, labeled by "ToDo:"',
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2022-03-22',
					startDate: '2022-03-18',
				},
				{
					id: nanoid(),
					name: '2 If a task has already been done, the checkbox should be checked',
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2022-03-19',
					startDate: '2022-03-14',
				},
				{
					id: nanoid(),
					name: '3 Each task should be visually separated',
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2022-03-16',
					startDate: '2022-03-15',
				},
				{
					id: nanoid(),
					name: "4 Each task should display it's own checkbox",
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2022-03-08',
					startDate: '2022-03-01',
				},

				{
					id: nanoid(),
					name: '5 All tasks should be displayed in vertical order',
					done: true,
					dueDate: '2026-03-12',
					doneDate: '2022-03-30',
					startDate: '2022-03-29',
				},
				{
					id: nanoid(),
					name: '6 The tasks are displayed, labeled by "ToDo:"',
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2022-03-15',
					startDate: '2022-03-10',
				},
				{
					id: nanoid(),
					name: '7 If a task has already been done, the checkbox should be checked',
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2022-03-28',
					startDate: '2022-03-22',
				},
				{
					id: nanoid(),
					name: '8 Each task should be visually separated',
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2022-03-30',
					startDate: '2022-03-22',
				},
				{
					id: nanoid(),
					name: "9 Each task should display it's own checkbox",
					done: true,
					dueDate: '2025-03-12',
					doneDate: '2022-03-10',
					startDate: '2022-03-08',
				},

				{
					id: nanoid(),
					name: '10 All tasks should be displayed in vertical order',
					done: true,
					dueDate: '2026-03-12',
					doneDate: '2022-03-28',
					startDate: '2022-03-07',
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
						tasks: state.tasks.map(task => {
							if (task.id === id) {
								return { ...task, done: !task.done, doneDate: new Date() };
							} else {
								return task;
							}
						}),
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
