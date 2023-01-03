import getArchives from '../../src/services/get-archives';

export default async function handler(req, res) {
	const archives = await getArchives();
	res.status(200).json(archives);
}
