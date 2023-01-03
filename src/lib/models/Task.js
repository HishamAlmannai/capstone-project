import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
	name: String,
	done: Boolean,
	dueDate: Date,
	doneDate: Date,
	startDate: Date,
});
const Task = mongoose.models?.Task ?? mongoose.model('Task', taskSchema);

export default Task;
