import { CategoryScale, Chart, LinearScale, LineElement, PointElement } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

Chart.register(LinearScale, CategoryScale, PointElement, LineElement);

const props = {
	data: {
		labels: [1, 2, 3, 3, 555, 4],
		datasets: [
			{
				label: '',
				data: [2, 3, 1, 4, 6, 4],
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
	return <Line {...props} />;
}
