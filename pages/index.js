import dynamic from 'next/dynamic';
import Button from '../src/components/Button/Button';
import Graph from '../src/components/Graph/Graph';
import useStore from '../src/services/useStore';
import { StyledCard } from '../styles/Card.styled';

export default function Home() {
	//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
	const TaskList = dynamic(() => import('../src/components/TaskList/TaskList'), {
		ssr: false, // This line is important.
	});
	const Form = dynamic(() => import('../src/components/Form/Form'), {
		ssr: false, // This line is important.
	});

	const archiveTasks = useStore(state => state.archiveTasks);

	return (
		<main>
			<h1 hidden>ToNotDo</h1>
			<h2 hidden>Create</h2>
			<Form editMode={false} className="header" />
			<h2 hidden>ToDo</h2>
			<TaskList />
			<StyledCard className="graph">
				<Graph />
			</StyledCard>
			<Button
				className="footer"
				onClick={() => {
					archiveTasks();
				}}
			>
				Archive checked
			</Button>
		</main>
	);
}
