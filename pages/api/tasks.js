import getTasks from '../../src/services/get-tasks';

export default async function handler(req, res) {
	const tasks = await getTasks();

	res.status(200).json(tasks);
}
