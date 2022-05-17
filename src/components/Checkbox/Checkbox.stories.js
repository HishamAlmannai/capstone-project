import React from 'react';
import Checkbox from './Checkbox';

export default {
	title: 'components/checkbox',
};

export function Default() {
	return <Checkbox task={{ done: false }} />;
}
export function checked() {
	return <Checkbox task={{ done: true }} />;
}
