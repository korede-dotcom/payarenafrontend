import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  Tooltip,
  Legend
);

 const options = {
  
  scales:{
    y:{
      beginAtZero: true,
      grid:{
        // borderColor: '#F2EFFF',
        borderWidth:30,
        display:false,
        drawBorder:false,
      }
    },
    x:{
      grid:{
        // borderColor: '#F2EFFF',
        borderWidth:30,
        display:false,
        drawBorder:false,
      }
  }
}
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: [100, 39, 10, 40, 39, 80, 40],
      backgroundColor: '#F2EFFF',
      hoverBackgroundColor: '#00B3FE',
      borderColor: '#F2EFFF',
      borderRadius: 5,
      // borderWidth:10,
    },
    
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
