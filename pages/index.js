import Button from '../src/components/Button/Button';
import Graph from '../src/components/Graph/Graph';
import { StyledCard } from '../styles/Card.styled';
import TaskList from '../src/components/TaskList/TaskList';
import Form from '../src/components/Form/Form';
import { SWRConfig } from 'swr';
import swrFetcher from '../src/lib/swr-fetcher';
import getTasks from '../src/services/get-tasks';
import getArchives from '../src/services/get-archives';

export async function getStaticProps() {
	const tasks = await getTasks();
	const archiveTasks = await getArchives();

	return {
		props: {
			fallback: {
				'/api/tasks': tasks,
				'/api/archives': archiveTasks,
			},
		},
	};
}

export default function Home({ fallback }) {
	return (
		<main>
			<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
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
					/*
				onClick={() => {
					archiveTasks(tasks);
				
				}
			}
				*/
				>
					Archive checked
				</Button>
			</SWRConfig>
		</main>
	);
}
