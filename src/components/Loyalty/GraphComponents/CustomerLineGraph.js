import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { createUseStyles } from 'react-jss';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const useStyles = createUseStyles({
  lineGraph: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
    width: ({ width }) => width,
    display: 'flex',
    flexDirection: 'column',
    '& > h4': {
      margin: '0 0 1rem 0',
    }
  }
});

function CustomerLineGraph({title, data, options, width}) {
  const classes = useStyles({ width });

  return (
    <div className={classes.lineGraph}>
      <h4>{title}</h4>
      <Line data={data} options={options}/>
    </div>
  )
}

export default CustomerLineGraph;