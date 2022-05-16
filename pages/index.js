import Button from '../src/components/Button/Button';
import Input from '../src/components/Input/Input';
import TaskList from '../src/components/TaskList/TaskList';
import GlobalStyle from '../styles/GlobalStyle';

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<h1>ToDo</h1>
			<TaskList />
			<Input />
			<Button />
		</>
	);
}
