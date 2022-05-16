//import GlobalStyle from '../styles/GlobalStyle';
import useStore from '../src/services/useStore';
import Form from '../src/components/Form/Form';
import TaskList from '../src/components/TaskList/TaskList';

export default function Home() {
	const review = useStore(state => state.review);
	return (
		<>
			<h1>ToDo</h1>
			<TaskList review={review} />
			<Form />
		</>
	);
}
