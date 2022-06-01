import React from 'react';
import { Chart, LineElement, LinearScale, CategoryScale, BarElement, PointElement } from 'chart.js';
Chart.register(LineElement, LinearScale, CategoryScale, BarElement, PointElement);
import { Line } from 'react-chartjs-2';
import useStore from '../../services/useStore';
import { format } from 'date-fns';
import { orderBy } from 'lodash';

export default function Graph() {
	const tasks = useStore(state => state.tasks);

	const tasksDone = tasks.filter(task => task.done);
	const TasksDoneByStartDate = orderBy(tasksDone, ['startDate']);

	const startDates = TasksDoneByStartDate.map(task =>
		format(new Date(task.startDate), 'dd/MM/yyyy')
	);
	const now = format(new Date(), 'dd/MM/yyyy');
	startDates.push('You are here\n' + now);

	// Anzahl der Tasks die zum jeweiligen startdatum erledigt sind
	const countDone = TasksDoneByStartDate.map(
		task => TasksDoneByStartDate.filter(taskOther => task.startDate > taskOther.doneDate).length
	);

	/*
	const countTasks = TasksDoneByStartDate.map(task => TasksDoneByStartDate.indexOf(task));
	const substractTasksDone = countTasks.map((taskIndex, index) => taskIndex - countDone[index]);
	 	console.log(substractTasksDone);
	console.log(TasksDoneByStartDate); */

	const data = {
		labels: startDates,
		datasets: [
			{
				label: '',
				data: countDone,
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
					// forces step size to be 50 units
					stepSize: 1,
				},
			},
		},
	};

	return <Line class="canvas" data={data} options={options} width="600px" height="auto" />;
}
