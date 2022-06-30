import Archive from '../lib/models/Archive';
import { dbConnect } from '../lib/db/database';

export default async function getArchives() {
	await dbConnect();
	const archives = await Archive.find();

	return archives.map(({ id, name, done, dueDate, doneDate, startDate }) => {
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
