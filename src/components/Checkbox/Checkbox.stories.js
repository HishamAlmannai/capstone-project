import Checkbox from './Checkbox';

export default {
	title: 'components/checkbox',
};

const props = {
	task: {
		type: 'text',
		name: 'Inputt',
		placeholder: 'anyKey',
		done: false,
		id: 4,
	},
};

export function Default() {
	return <Checkbox {...props} />;
}
export function checked() {
	return <Checkbox task={{ done: true }} />;
}
