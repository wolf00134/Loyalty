import React from "react";
import TotalCustomers from "./customerComponents/TotalCustomers";
import { useStyles } from "./Revenue";
import CustomerLineGraph from "./customerComponents/CustomerLineGraph";
import CustomerSegment from "./customerComponents/CustomerSegment";
import CustomerPieChart from "./customerComponents/CustomerPieChart";

function Summary() {
  const classes = useStyles();
  const summaries = [
    {
      title: 'Tổng khách hàng',
      amount: '3M',
      percentage: '13%',
    },
    {
      title: 'Tổng khách hàng tích điểm',
      amount: '3.7M',
      percentage: '13%',
    },
    {
      title: 'Tổng khách hàng tiêu điểm',
      amount: '94.5K',
      percentage: '3%',
    },
    {
      title: 'Tổng reward points tích',
      amount: '1.2B',
      percentage: '3%',
    },
    {
      title: 'Tổng reward points tiêu',
      amount: '236M',
      percentage: '1%',
    },
    {
      title: 'Tổng reward points hết hạn',
      amount: '472M',
      percentage: '3%',
    },
  ];
  const summaryPieCharts = [
    {
      title: 'Tổng khách hàng tích tại Shop A',
      amount: '300K',
      percentage: '10%',
    },
    {
      title: 'Tổng khách hàng tích tại Shop B',
      amount: '3.08M',
      percentage: '10%',
    },
    {
      title: 'Tổng khách hàng tích tại Shop C',
      amount: '372K',
      percentage: '10%',
    },
    {
      title: 'Tổng reward points tích tại Shop A',
      amount: '446M',
      percentage: '10%',
    },
    {
      title: 'Tổng reward points tích tại Shop B',
      amount: '762M',
      percentage: '10%',
    },
    {
      title: 'Tổng reward points tích tại Shop C',
      amount: '300K',
      percentage: '10%',
    },
  ];

  const renderSummary = (summary) => (
    <TotalCustomers 
      title={summary.title}
      amount={summary.amount}
      percentage={summary.percentage}
    />
  );

  const renderPieChart = (pie) => (
    <CustomerPieChart 
      title={pie.title}
      amount={pie.amount}
      percentage={pie.percentage}
    />
  )

  return (
    <>
      <div className={classes.gridWrapper}>
        {summaries.map((summary) => renderSummary(summary))}
      </div>
        <CustomerLineGraph title={'Số giao dịch tích, tiêu điểm và tiêu chéo'}/>
      <div className={classes.graphGrid}>
        <CustomerSegment />
        <CustomerLineGraph title={'Tỷ lệ phân hạng khách hàng'} />
      </div>
      <div className={classes.gridWrapper}>
        {summaryPieCharts.map((pie) => renderPieChart(pie))}
      </div>
    </>
  )
}

export default Summary;