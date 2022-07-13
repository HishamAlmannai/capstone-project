import { dbConnect } from '../../src/lib/db/database';
import Archive from '../../src/lib/models/Archive';
import Task from '../../src/lib/models/Task';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const oldTaskData = JSON.parse(req.body);
		await dbConnect();
		await Archive.insertMany(oldTaskData);
		const deleteMany = await Task.deleteMany({ done: true });

		console.log(req.body);
		res.status(200).json({
			message: 'tasks archived',
			entry: deleteMany,
		});
	} else {
		res.status(405).json({ error: 'wrong method' });
	}
}
