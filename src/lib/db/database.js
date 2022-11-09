import mongoose from 'mongoose';

const url = process.env.DB_CONNECTION;

export async function dbConnect() {
	try {
		await mongoose.connect(String(url), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to MongoDB');
		console.log(typeof url);
	} catch (error) {
		console.error('ERROR, could not connect', error.message);
	}
}
