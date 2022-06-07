import React from 'react';
import Graph from './Graph';

const props = {
	data: {
		labels: [1, 2, 3],
		datasets: [
			{
				label: '',
				data: [2, 3, 1],
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(54, 162, 235, 1)'],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					stepSize: 1,
				},
				title: {
					display: true,
					text: 'Tasks',
				},
			},
			x: {
				title: {
					display: true,
					text: 'Time',
				},
			},
		},
	},
};

export default {
	title: 'components/Graph',
};

export function Default() {
	return <Graph {...props} />;
}
