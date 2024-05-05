import React from "react";
import TotalCustomers from "./customerComponents/TotalCustomers";
import { createUseStyles } from "react-jss";
import { N10 } from "@atlaskit/theme/colors";
import RevenueOccurance from "./customerComponents/RevenueOccurance";

export const useStyles = createUseStyles({
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
  },
  graph: {
    padding: '1rem',
    backgroundColor: N10,
    borderRadius: 6,
    '& > h4': {
      margin: 0,
    }
  },
})

function Revenue() {
  const classes = useStyles();

  const revenues = [
    {
      title: 'Tổng doanh thu',
      amount: '21.65B',
      percentage: '+18%',
    },
    {
      title: 'Doanh thu từ reward points tích',
      amount: '12B',
      percentage: '+3%',
    },
    {
      title: 'Doanh thu từ reward points tiêu',
      amount: '9.65B',
      percentage: '+15%',
    },
  ];

  const renderRevenueReport = (revenue) => (
    <TotalCustomers
      title={revenue.title}
      amount={revenue.amount}
      percentage={revenue.percentage}
    />
  );

  return (
    <>
      <div className={classes.gridWrapper}>
        {revenues.map((revenue) => renderRevenueReport(revenue))}
      </div>
      <RevenueOccurance />
    </>
  )
}

export default Revenue;