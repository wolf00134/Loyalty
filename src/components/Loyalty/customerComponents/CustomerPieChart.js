import { N10 } from "@atlaskit/theme/colors";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  chartWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
    '& > h3, h4, h1, h5, p': {
      margin: 0,
    },
    '& > hr': {
      margin: 0
    }
  },
})

function CustomerPieChart({title, amount, percentage}) {
  const classes = useStyles();

  return (
    <div className={classes.chartWrapper}>
      <h4>{title}</h4>
      <h1>{amount}</h1>
      <p>{`${percentage} so với tháng trước`}</p>
    </div>
  )
}

export default CustomerPieChart;