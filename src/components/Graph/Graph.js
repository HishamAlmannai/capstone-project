import React from 'react';
import useStore from '../../services/useStore';
import { Chart, LineElement, LinearScale, CategoryScale, BarElement, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import { orderBy } from 'lodash';

export default function Graph() {
	Chart.register(LineElement, LinearScale, CategoryScale, BarElement, PointElement);

	const tasks = useStore(state => state.tasks);

	const cleanPastDates = tasks
		.flatMap(task => [task.startDate, task.doneDate])
		.filter(date => date !== undefined);
	let orderedPastDates = orderBy(cleanPastDates);

	const tasksCountAtDate = orderedPastDates.map(
		date => tasks.filter(task => task.startDate < date).length
	);
	const shiftTasksCountAtDate = tasksCountAtDate.map(count => count - 1);
	const tasksDoneAtDate = orderedPastDates.map(
		date => tasks.filter(task => task.doneDate < date).length
	);
	const substractTasksDone = shiftTasksCountAtDate.map(
		(number, index) => number - tasksDoneAtDate[index]
	);
	let Dates = orderedPastDates.map(date => format(new Date(date), 'k:mm'));

	const data = {
		labels: Dates,
		datasets: [
			{
				label: '',
				data: substractTasksDone,
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(54, 162, 235, 1)'],
				borderWidth: 1,
			},
		],
	};
	Chart.defaults.font.size = 16;

	const options = {
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
	};

	return <Line className="canvas" data={data} options={options} />;
}
