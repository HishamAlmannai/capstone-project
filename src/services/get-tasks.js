import Task from '../lib/models/Task';
import { dbConnect } from '../lib/db/database';

export default async function getTasks() {
	await dbConnect();
	const tasks = await Task.find();

	return tasks.map(({ id, name, done, dueDate, doneDate, startDate }) => {
		return {
			id,
			name,
			done,
			dueDate,
			doneDate,
			startDate,
		};
	});
}
