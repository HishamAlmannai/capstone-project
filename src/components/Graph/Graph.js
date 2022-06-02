import React from 'react';
import useStore from '../../services/useStore';
import { Chart, LineElement, LinearScale, CategoryScale, BarElement, PointElement } from 'chart.js';
Chart.register(LineElement, LinearScale, CategoryScale, BarElement, PointElement);
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import { orderBy } from 'lodash';

export default function Graph() {
	const tasks = useStore(state => state.tasks);

	const pastDates = tasks.flatMap(task => [task.startDate, task.doneDate]);
	const cleanPastDates = pastDates.filter(date => date !== undefined);
	const orderedPastDates = orderBy(cleanPastDates);

	const tasksCountAtDate = orderedPastDates.map(
		date => tasks.filter(task => task.startDate < date).length
	);
	const shiftTasksCountAtDate = tasksCountAtDate.map(count => count - 1);
	const TasksDoneAtDate = orderedPastDates.map(
		date => tasks.filter(task => task.doneDate < date).length
	);
	const substractTasksDone = shiftTasksCountAtDate.map(
		(task, index) => task - TasksDoneAtDate[index]
	);
	const Dates = orderedPastDates.map(date => format(new Date(date), 'k:m:s'));

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

	const options = {
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					stepSize: 1,
				},
			},
		},
	};

	return <Line class="canvas" data={data} options={options} width="600px" height="280px" />;
}
