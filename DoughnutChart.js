import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,ChartConfiguration } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    legend: {
    
      labels: {
        display: false,
      },
    }
  };
  
  

export const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  // set value to the center of the chart


// counter plugin for doughnut chart
  
  datasets: [
    {
      label: 'Billers',
      data: [100, 39, 10, 40, 39, 80, 40],
      backgroundColor: '#F2EFFF',
      hoverBackgroundColor: '#00B3FE',
      borderColor: '#F2EFFF',
      borderRadius: 5,
      // borderWidth:10,
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
