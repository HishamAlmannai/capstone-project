import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
	name: String,
	done: Boolean,
	dueDate: Date,
	doneDate: Date,
	startDate: Date,
});
const Archive = mongoose.models?.Archive ?? mongoose.model('Archive', taskSchema);

export default Archive;
