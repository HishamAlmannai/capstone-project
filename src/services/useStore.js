import create from 'zustand';
import { nanoid } from 'nanoid';
import { persist } from 'zustand/middleware';
import { data } from '../lib/data';

const useStore = create(
	persist(
		set => ({
			tasks: data,
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
