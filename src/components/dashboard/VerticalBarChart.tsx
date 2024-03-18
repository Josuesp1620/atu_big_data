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
  Title,
  Tooltip,
  Legend
);

export function ChartVertical({labelsAll, label, dataAPI, title}:{labelsAll : any, label: any, dataAPI: any, title: any}) {
    
  const options = {
      responsive: true,
      plugins: {
      legend: {
          position: 'bottom' as const,
      },
      title: {
          display: true,
          text: title,
      },
      },
  };

  const generateRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 0.5)`;
  };

  const datasets = [
      {
        label: label,
        data: labelsAll.map(_label => {
          const dataItem = dataAPI.find(item => item[label] === _label);
          return dataItem ? dataItem.suma_viajes : 0;
        }),
        backgroundColor: generateRandomColor(),
      },
  ];    
  const data = {
      labels: labelsAll,
      datasets: datasets,
  };

  
  return <Bar options={options} data={data} />;
}