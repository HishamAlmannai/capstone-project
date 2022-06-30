import create from 'zustand';
import produce from 'immer';

const useStore = create(set => ({
	tasks: [],
	fetchTasks: async () => {
		try {
			const response = await fetch('/api/tasks');
			const data = await response.json();
			set({ tasks: data });
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},

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
			set(
				produce(draft => {
					draft.tasks.push({ ...newTask });
				})
			);
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
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
			set(state => {
				return {
					tasks: state.tasks.map(task => {
						if (task.id === id) {
							return { ...task, done: !done, doneDate: doneDate };
						} else {
							return task;
						}
					}),
				};
			});
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},

	deleteTask: async id => {
		try {
			const response = await fetch('/api/task/' + id, {
				method: 'DELETE',
			});
			await response.json();
			set(state => {
				return {
					tasks: state.tasks.filter(task => task.id !== id),
				};
			});
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
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
			set(state => {
				return {
					tasks: state.tasks.map(task =>
						task.id === id
							? {
									...task,
									name: inputValue,
									dueDate: new Date(dueDateValue),
							  }
							: task
					),
					entryToUpdate: null,
				};
			});
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},

	archives: [],
	fetchArchive: async () => {
		try {
			const response = await fetch('/api/archives');
			const data = await response.json();
			set({ Archives: data });
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},

	archiveTasks: async tasks => {
		const archivedTasks = tasks.filter(task => task.done);
		try {
			const response = await fetch('/api/archive', {
				method: 'POST',
				body: JSON.stringify(archivedTasks),
			});
			await response.json();
			set(state => {
				return {
					archives: state.tasks.filter(task => task.done),
					tasks: state.tasks.filter(task => !task.done),
				};
			});
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},
}));

export default useStore;
