import React from 'react';
import Checkbox from '../components/Checkbox';

const props = {
	props: {
		done: false,
	},
};

export default props;

export function Default() {
	return <Checkbox {...props} />;
}
