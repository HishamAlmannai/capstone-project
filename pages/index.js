import Form from '../src/components/Form/Form';
import TaskList from '../src/components/TaskList/TaskList';

export default function Home() {
	return (
		<>
			<h1 hidden>ToNotDo</h1>
			<h2>Create</h2>
			<Form />
			<h2>ToDo</h2>
			<TaskList />
		</>
	);
}
