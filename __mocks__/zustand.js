import actualCreate from 'zustand';
import { act } from 'react-dom/test-utils';

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = createState => {
	const store = actualCreate(createState);
	const initialState = store.getState();
	initialState.tasks = [
		{
			id: '1k3Ipsv5gtPHkap5qKWjW',
			name: 'The tasks are displayed, labeled by "ToDo:"',
			done: false,
			archive: false,
			dueDate: '2025-03-12',
		},
		{
			id: 'mIEC9lux_nZFSyZtSYC4i',
			name: 'If a task has already been done, the checkbox should be checked',
			done: true,
			archive: false,
			dueDate: '2025-05-12',
		},
		{
			id: '7DlndN0gxK3AK3VX05HAK',
			name: 'Each task should be visually separated',
			done: true,
			archive: true,
			dueDate: '1025-03-12',
		},
		{
			id: '0FVYm7d3-qt1bqAdovh_Q',
			name: "Each task should display it's own checkbox",
			done: true,
			archive: false,
			dueDate: '2000-03-12',
		},
		{
			id: 'WDbiF04kNMVzBE9L8Ljjg',
			name: 'All tasks should be displayed in vertical order',
			done: false,
			archive: false,
			dueDate: '3000-03-12',
		},
	];
	storeResetFns.add(() => store.setState(initialState, true));
	return store;
};

// Reset all stores after each test run
afterEach(() => {
	act(() => storeResetFns.forEach(resetFn => resetFn()));
});

export default create;
