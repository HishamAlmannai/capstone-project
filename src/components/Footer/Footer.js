import React from 'react';
import useSWR from 'swr';
import useStore from '../../services/useStore';
import Button from '../Button/Button';

export default function Footer() {
	const archiveTasks = useStore(state => state.archiveTasks);

	const { data: tasks, error } = useSWR('/api/tasks');
	if (error) {
		return <p>Error: {error.message}</p>;
	}
	if (!tasks) {
		return <p>loading...</p>;
	}

	return (
		<footer>
			<Button
				class="footer"
				onClick={() => {
					archiveTasks(tasks);
				}}
			>
				Archive
			</Button>
		</footer>
	);
}
