import Task from '../../../src/lib/models/Task';
import { dbConnect } from '../../../src/lib/db/database';

export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === 'DELETE') {
		const deletedTask = await Task.findByIdAndDelete(id);
		res.status(200).json({
			message: 'task deleted',
			entry: deletedTask,
		});
		[];
	} else if (req.method === 'PUT') {
		const newTaskData = JSON.parse(req.body);
		await dbConnect();
		const updatedTask = await Task.findByIdAndUpdate(id, newTaskData, {
			new: true,
		});
		res.status(200).json({
			message: 'task edited',
			entry: updatedTask,
		});
	} else {
		const singleTask = await Task.findById(id);
		res.status(200).json(singleTask);
	}
}
