import create from 'zustand';

import { data } from '../lib/data';

const useStore = create(set => ({
	tasks: data,
	addTask: task => {
		set(state => {
			return {
				tasks: [{ id: '5', name: task, done: false }, ...state.tasks],
			};
		});
	},
}));

export default useStore;
