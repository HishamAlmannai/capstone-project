import create from 'zustand';
import nanoid from 'nanoid';
import { data } from '../lib/data';

const useStore = create(set => ({
	tasks: data,
	addTask: task => {
		set(state => {
			return {
				tasks: [{ id: nanoid, name: task, done: false }, ...state.tasks],
			};
		});
	},
}));

export default useStore;
