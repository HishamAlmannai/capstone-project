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
			<h2 hidden>Create</h2>
			<article>
				<Form editMode={false} />
			</article>
			<h2 hidden>ToDo</h2>
			<TaskList />
			<article>
				<Graph />
			</article>
		</main>
	);
}
