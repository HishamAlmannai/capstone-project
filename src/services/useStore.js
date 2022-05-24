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
				},
				{
					id: nanoid(),
					name: 'If a task has already been done, the checkbox should be checked',
					done: false,
					archive: false,
				},
				{
					id: nanoid(),
					name: 'Each task should be visually separated',
					done: true,
					archive: false,
				},
				{
					id: nanoid(),
					name: "Each task should display it's own checkbox",
					done: true,
					archive: false,
				},

				{
					id: nanoid(),
					name: 'All tasks should be displayed in vertical order',
					done: true,
					archive: false,
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
						tasks: state.tasks.map(dask =>
							dask.id === id ? { ...dask, done: !dask.done } : dask
						),
					};
				});
			},

			deleteTask: id => {
				set(state => {
					return {
						tasks: state.tasks.filter(dask => dask.id !== id),
					};
				});
			},
			archiveTasks: () => {
				set(state => {
					return {
						tasks: state.tasks.map(dask =>
							dask.done ? { ...dask, archive: true } : dask
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
