import Task from '../../../src/lib/models/Task';
import { dbConnect } from '../../../src/lib/db/database';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const newTaskData = JSON.parse(req.body);
		await dbConnect();

		const newTask = await Task.create({
			name: newTaskData.name,
			done: newTaskData.done,
			dueDate: newTaskData.dueDate,
			doneDate: newTaskData.doneDate,
			startDate: newTaskData.startDate,
		});
		res.status(201).json({
			message: 'task created',
			entry: newTask,
		});
	} else {
		res.status(405).json({ error: 'wrong method' });
	}
}
