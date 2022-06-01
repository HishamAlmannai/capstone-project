import React from 'react';
import { Chart, LineElement, LinearScale, CategoryScale, BarElement } from 'chart.js';
Chart.register(LineElement, LinearScale, CategoryScale, BarElement);
import { Bar } from 'react-chartjs-2';
import useStore from '../../services/useStore';
import { format } from 'date-fns';
import { orderBy } from 'lodash';

export default function Graph() {
	const tasks = useStore(state => state.tasks);

	const tasksDone = tasks.filter(task => task.done);
	const startDates = tasksDone.map(task => format(new Date(task.startDate), 'dd/MM/yyyy'));
	const orderedTasksDone = orderBy(tasksDone, ['startDate']);
	console.log(orderedTasksDone);

	//const now = format(new Date(), 'dd/MM/'); //'Today' + now

	const data = {
		labels: startDates,
		datasets: [
			{
				label: '',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return <Bar class="canvas" data={data} options={options} width={200} height={100} />;
}
