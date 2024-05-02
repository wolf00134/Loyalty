import React from "react";
import TotalCustomers from "./customerComponents/TotalCustomers";
import { useStyles } from "./Revenue";
import CustomerLineGraph from "./GraphComponents/CustomerLineGraph";
import CustomerSegment from "./customerComponents/CustomerSegment";
import { B200, G400, N10 } from "@atlaskit/theme/colors";
import TotalCustomerShopA from "./customerComponents/TotalCustomerShopA";
import TotalPointsSavedShopA from "./customerComponents/TotalPointsSavedShopA";
import { DATES } from "../utils/constant";

function Summary() {
  const classes = useStyles();

  const summaries = [
    {
      title: 'Tổng khách hàng',
      amount: '3M',
      percentage: '+13%',
    },
    {
      title: 'Tổng giao dịch tích điểm',
      amount: '6M',
      percentage: '+13%',
    },
    {
      title: 'Tổng giao dịch tiêu điểm',
      amount: '3M',
      percentage: '+3%',
    },
    {
      title: 'Tổng reward points tích',
      amount: '1.2B',
      percentage: '+3%',
    },
    {
      title: 'Tổng reward points tiêu',
      amount: '965M',
      percentage: '+15%',
    },
    {
      title: 'Tổng reward points hết hạn',
      amount: '472M',
      percentage: '+3%',
    },
  ];
  const summaryPieCharts = [
    {
      graph: <TotalCustomerShopA title='Tổng khách hàng tại 4 công ty' amount='~895K' percentage='10%'/>
    },
    {
      graph: <TotalPointsSavedShopA title='Tổng reward points tích tại 4 công ty' amount='~143M' percentage='10%'/>
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
    <>
      {pie.graph}
    </>
  );

  const data = {
    labels: DATES,
    datasets: [
      {
        fill: true,
        label: 'Tích điểm',
        data: [818000, 1868000, 3300000, 4211866, 6000000],
        borderColor: G400,
        backgroundColor: 'rgba(145, 255, 175, 0.3)',
      },
      {
        fill: true,
        label: 'Tiêu điểm',
        data: [290000, 697000, 809000, 1370560, 2800000],
        borderColor: B200,
        backgroundColor: 'rgba(127, 230, 255, 0.5)',
      },
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          useBorderRadius: true,
          borderRadius: 5,
          boxWidth: 10,
          boxHeight: 10,
        },
      }
    }
  }

  return (
    <>
      <div className={classes.gridWrapper}>
        {summaries.map((summary) => renderSummary(summary))}
      </div>
      <div style={{display: 'flex', backgroundColor: N10, borderRadius: 6}}>
        <CustomerLineGraph title='Số giao dịch tích, tiêu điểm' data={data} options={options} width='80%'/>
        <div style={{padding: '3rem 3rem 0 3rem'}}>
          <div>
            <h4 style={{margin: 10}}>% Điểm tiêu / tích</h4>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={{margin: 10}}>13.64%</h2>
              <h5 style={{margin: 10, color: 'green'}}>+13%</h5>
            </div>
          </div>
          <hr />
          <div>
            <h4 style={{margin: 10}}>% Số giao dịch tiêu/ chéo / Tổng tiêu của CCTV</h4>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={{margin: 10}}>5.70%</h2>
              <h5 style={{margin: 10, color: 'green'}}>+6%</h5>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className={classes.graphGrid}>
        <CustomerSegment title={'Phân khúc khách hàng'}/>
        <CustomerSegment title={'Tỷ lệ phân hạng khách hàng'}/>
      </div>
      <div style={{display: 'flex', width: '100%', gap: '1rem'}}>
        {summaryPieCharts.map((pie) => renderPieChart(pie))}
      </div>
    </>
  )
}

export default Summary;