import create from 'zustand';
import { mutate } from 'swr';

const useStore = create(() => ({
	addTask: async (name, dueDate) => {
		const newTask = {
			name: name,
			done: false,
			dueDate: dueDate,
			doneDate: new Date(0),
			startDate: new Date(),
		};
		try {
			const response = await fetch('/api/task/create', {
				method: 'POST',
				body: JSON.stringify(newTask),
			});
			await response.json();
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
		mutate('/api/tasks');
	},

	checkTask: async (id, done) => {
		const doneDate = done ? new Date(0) : new Date();
		const editedTask = {
			done: !done,
			doneDate: doneDate,
		};
		try {
			const response = await fetch('/api/task/' + id, {
				method: 'PUT',
				body: JSON.stringify(editedTask),
			});
			await response.json();
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
		mutate('/api/tasks');
	},

	deleteTask: async id => {
		try {
			const response = await fetch('/api/task/' + id, {
				method: 'DELETE',
			});
			await response.json();
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
		mutate('/api/tasks');
	},

	updateTask: async (id, inputValue, dueDateValue) => {
		const editedTask = {
			name: inputValue,
			dueDate: dueDateValue,
		};
		try {
			const response = await fetch('/api/task/' + id, {
				method: 'PUT',
				body: JSON.stringify(editedTask),
			});
			await response.json();
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
		mutate('/api/tasks');
	},

	archiveTasks: async tasks => {
		const archivedTasks = tasks.filter(task => task.done);
		try {
			const response = await fetch('/api/archive', {
				method: 'PUT',
				body: JSON.stringify(archivedTasks),
			});
			await response.json();
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
		mutate('/api/tasks');
	},
}));

export default useStore;
