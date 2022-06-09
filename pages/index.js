import Button from '../src/components/Button/Button';
import Graph from '../src/components/Graph/Graph';
import useStore from '../src/services/useStore';
import { StyledCard } from '../styles/Card.styled';
import TaskList from '../src/components/TaskList/TaskList';
import Form from '../src/components/Form/Form';
import { useEffect } from 'react';

export default function Home() {
	const archiveTasks = useStore(state => state.archiveTasks);

	useEffect(() => {
		useStore.getState().fetchTasks();
	}, []);

	return (
		<main>
			<h1 hidden>ToNotDo</h1>
			<h2 hidden>Create</h2>
			<Form editMode={false} />
			<h2 hidden>ToDo</h2>
			<TaskList />
			<StyledCard className="graph">
				<Graph />
			</StyledCard>
			<Button
				class="footer"
				onClick={() => {
					archiveTasks();
				}}
			>
				Archive checked
			</Button>
		</main>
	);
}
