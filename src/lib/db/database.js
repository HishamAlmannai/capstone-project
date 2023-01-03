import mongoose from 'mongoose';

const url = process.env.DB_CONNECTION;

export function dbConnect() {
	try {
		mongoose.connect(url);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('ERROR, could not connect', error.message);
	}
}
