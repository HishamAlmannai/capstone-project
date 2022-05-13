import TaskList from '../src/components/TaskList';
import GlobalStyle from '../styles/GlobalStyle';

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<h1>ToDo</h1>
			<TaskList />
		</>
	);
}
