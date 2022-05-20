import create from 'zustand';
import { nanoid } from 'nanoid';
import { persist } from 'zustand/middleware';

const useStore = create(
	persist(
		(set, get) => ({
			tasks: [
				{ id: nanoid(), name: 'The tasks are displayed, labeled by "ToDo:"', done: true },
				{
					id: nanoid(),
					name: 'If a task has already been done, the checkbox should be checked',
					done: false,
				},
				{ id: nanoid(), name: 'Each task should be visually separated', done: true },
				{ id: nanoid(), name: "Each task should display it's own checkbox", done: true },

				{
					id: nanoid(),
					name: 'All tasks should be displayed in vertical order',
					done: true,
				},
			],

			addTask: task => {
				set(state => {
					return {
						tasks: [{ id: nanoid(), name: task, done: false }, ...state.tasks],
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
			getStatus: id => {
				set(state => {
					return {
						tasks: state.tasks.findIndex(dask => dask.id === id),
					};
				});
			},
			getIndex: id => {
				get(state => {
					return {
						state: state.tasks.findIndex(dask => dask.id === id),
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
		}),
		{ name: 'local tasks' }
	)
);

export default useStore;
