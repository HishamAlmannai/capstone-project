import Graph from '../src/components/Graph/Graph';
import TaskList from '../src/components/TaskList/TaskList';
import Form from '../src/components/Form/Form';
import Footer from '../src/components/Footer/Footer';
import { SWRConfig } from 'swr';
import swrFetcher from '../src/lib/swr-fetcher';
import getTasks from '../src/services/get-tasks';
import getArchives from '../src/services/get-archives';
import { StyledDiv } from '../styles/Div.styled';

export async function getStaticProps() {
	const tasks = await getTasks();
	const archives = await getArchives();
	return {
		props: {
			fallback: {
				'/api/tasks': tasks,
				'/api/archives': archives,
			},
		},
	};
}

export default function Home({ fallback }) {
	return (
		<>
			<header>
				<h1 hidden>toNotDo</h1>
			</header>
			<main>
				<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
					<h2 hidden>Create</h2>
					<Form editMode={false} />
					<h2 hidden>ToDo</h2>
					<TaskList />
					<StyledDiv className="graph">
						<Graph />
					</StyledDiv>
				</SWRConfig>
			</main>
			<Footer />
		</>
	);
}
