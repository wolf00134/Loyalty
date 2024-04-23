import React from "react";
import TotalCustomers from "./customerComponents/TotalCustomers";
import { createUseStyles } from "react-jss";
import { N10 } from "@atlaskit/theme/colors";
import RevenueOccurance from "./customerComponents/RevenueOccurance";
import RevenueOnPointsSaved from "./customerComponents/RevenueOnPointsSaved";
import RevenueOnPointsSpend from "./customerComponents/RevenueOnPointsSpend";
import MembersAndCctvSpend from "./customerComponents/MembersAndCctvSpend";

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
  graphGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
  }
})

function Revenue() {
  const classes = useStyles();

  const revenues = [
    {
      title: 'Doanh thu từ reward points tích',
      amount: '12.3B',
      percentage: '3%',
    },
    {
      title: 'Doanh thu từ reward points tiêu',
      amount: '2.3B',
      percentage: '3%',
    },
    {
      title: 'Doanh thu từ reward points tiêu chéo',
      amount: '24.6M',
      percentage: '3%',
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
      <div className={classes.graphGrid}>
        <div className={classes.graph}>
          <RevenueOnPointsSaved />
        </div>
        <div className={classes.graph}>
          <RevenueOnPointsSpend />
        </div>
      </div>
      <MembersAndCctvSpend />
    </>
  )
}

export default Revenue;