import React from "react";
import TotalCustomers from "./customerComponents/TotalCustomers";
import { createUseStyles } from "react-jss";
import CustomerLineGraph from "./customerComponents/CustomerLineGraph";
import { N10 } from "@atlaskit/theme/colors";

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
      title: 'Doanh thu từ FGold tích',
      amount: '12.3B',
      percentage: '3%',
    },
    {
      title: 'Doanh thu từ FGold tiêu',
      amount: '2.3B',
      percentage: '3%',
    },
    {
      title: 'Doanh thu từ FGold tiêu chéo',
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
      <CustomerLineGraph 
        title='Tỉ lệ phát sinh doanh thu'
      />
      <div className={classes.graphGrid}>
        <div className={classes.graph}>
          <h4>Doanh thu trên từng FGold tích</h4>
        </div>
        <div className={classes.graph}>
          <h4>Doanh thu trên từng FGold tiêu</h4>
        </div>
      </div>
    </>
  )
}

export default Revenue;