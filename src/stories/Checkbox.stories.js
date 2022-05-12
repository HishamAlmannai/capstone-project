import React from 'react';
import Checkbox from '../components/Checkbox';

const props = {
	props: {
		id: 5,
		name: 'All tasks should be displayed in vertical order',
		done: false,
	},
};

export default props;

export function Default() {
	return <Checkbox {...props} />;
}
