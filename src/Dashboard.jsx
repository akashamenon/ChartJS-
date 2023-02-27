import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import LineChart from './LineChart';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const barChartData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [50, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [20, 10],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const lineChartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2, 3, 4],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [9, 4, 7, 6],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };;




export default function Dashboard() {
  return <>
    <Bar options={barChartOptions} data={barChartData} />
    {/* <Line options={lineChartOptions} data={lineChartData} /> */}
    <LineChart />
  </>
}


