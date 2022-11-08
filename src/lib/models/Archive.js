import mongoose from 'mongoose';

const archiveSchema = new mongoose.Schema({
	name: String,
	done: Boolean,
	dueDate: Date,
	doneDate: Date,
	startDate: Date,
});
const Archive = mongoose.models?.Archive ?? mongoose.model('Archive', archiveSchema);

export default Archive;
