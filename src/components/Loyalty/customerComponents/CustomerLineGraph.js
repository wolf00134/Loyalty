import React from 'react';
import { B50, B75, N10 } from '@atlaskit/theme/colors';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { createUseStyles } from 'react-jss';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const useStyles = createUseStyles({
  lineGraph: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    '& > h4': {
      margin: '0 0 1rem 0',
    }
  }
});

function CustomerLineGraph({title, labels}) {
  const classes = useStyles();

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    }
  }

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: [20000, 25694,10020,30293,5833,3455,9056,32454],
        borderColor: B75,
        backgroundColor: B50,
      }
    ]
  }

  return (
    <div className={classes.lineGraph}>
      <h4>{title}</h4>
      <Line data={data} options={options}/>
    </div>
  )
}

export default CustomerLineGraph;