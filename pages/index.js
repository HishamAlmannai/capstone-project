import useStore from '../src/services/useStore';
import Form from '../src/components/Form/Form';
import TaskList from '../src/components/TaskList/TaskList';

export default function Home() {
	const tasks = useStore(state => state.tasks);
	return (
		<>
			<h1 hidden>ToNotDo</h1>
			<h2>Create</h2>
			<Form />
			<h2>ToDo</h2>
			<TaskList tasks={tasks} />
		</>
	);
}
