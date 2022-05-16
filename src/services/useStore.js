import create from 'zustand';
import { data } from '../lib/data';

const useStore = create(set => ({
	review: data,
	addReview: data => {
		set(state => {
			return {
				review: [...state.review, { id: data.id, name: data.name, done: data.done }],
			};
		});
	},
}));

export default useStore;
