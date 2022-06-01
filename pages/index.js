import dynamic from 'next/dynamic';
import Graph from '../src/components/Graph/Graph';

export default function Home() {
	//delete on mongoDB integration, only used for persist/localStorage (dynamic import with NO SSR form next.js docu --> https://nextjs.org/docs/advanced-features/dynamic-import)
	const TaskList = dynamic(() => import('../src/components/TaskList/TaskList'), {
		ssr: false, // This line is important.
	});
	const Form = dynamic(() => import('../src/components/Form/Form'), {
		ssr: false, // This line is important.
	});
	return (
		<main>
			<h1 hidden>ToNotDo</h1>
			<h2>Create</h2>
			<Form editMode={false} />
			<h2>ToDo</h2>
			<TaskList />
			<Graph />
		</main>
	);
}
