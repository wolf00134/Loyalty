import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function CustomerPieChart({data, options}) {
  return (
    <div>
      <Doughnut data={data} options={options}/>
    </div>
  )
}

export default CustomerPieChart;