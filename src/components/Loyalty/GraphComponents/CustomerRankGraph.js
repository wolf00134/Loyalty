import React from "react";
import { useStyles } from "../Ranking";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CustomerRankGraph({title, data, options}) {
  const classes = useStyles();
  console.log('DATA', data);
  console.log('TITLE', title);


  return (
    <div className={classes.graphTitle} style={{margin: 0}}>
      <h4>{title}</h4>
      <Bar options={options} data={data} />
    </div>
  )
}

export default CustomerRankGraph;