import React from "react";
import TotalCustomers from "./customerComponents/TotalCustomers";
import { useStyles } from "./Revenue";
import CustomerLineGraph from "./GraphComponents/CustomerLineGraph";
import CustomerSegment from "./customerComponents/CustomerSegment";
import dayjs from "dayjs";
import { getDates } from "../utils/common";
import { B200, G400, N10, R400 } from "@atlaskit/theme/colors";
import TotalCustomerShopA from "./customerComponents/TotalCustomerShopA";
import TotalCustomerShopB from "./customerComponents/TotalCustomerShopB";
import TotalCustomerShopC from "./customerComponents/TotalCustomerShopC";
import TotalPointsSavedShopA from "./customerComponents/TotalPointsSavedShopA";
import TotalPointsSavedShopB from "./customerComponents/TotalPointsSavedShopB";
import TotalPointsSavedShopC from "./customerComponents/TotalPointsSavedShopC";

function Summary() {
  const classes = useStyles();
  const currentDate = dayjs();
  const lastDate = currentDate.subtract(1, 'week');
  const dates = getDates(lastDate, currentDate);
  console.log("🚀 ~ Summary ~ dates:", dates);

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
      graph: <TotalCustomerShopA title='Tổng khách hàng tích tại Shop A' amount='300K' percentage='10%'/>
    },
    {
      graph: <TotalCustomerShopB title='Tổng khách hàng tích tại Shop B' amount='3.08M' percentage='10%'/>
    },
    {
      graph: <TotalCustomerShopC title='Tổng khách hàng tích tại Shop C' amount='372K' percentage='10%'/>
    },
    {
      graph: <TotalPointsSavedShopA title='Tổng reward points tích tại Shop A' amount='446M' percentage='10%'/>
    },
    {
      graph: <TotalPointsSavedShopB title='Tổng reward points tích tại Shop B' amount='762M' percentage='10%'/>
    },
    {
      graph: <TotalPointsSavedShopC title='Tổng reward points tích tại Shop C' amount='33.3M' percentage='10%'/>
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
    labels: dates,
    datasets: [
      {
        fill: true,
        label: 'Tích điểm',
        data: [109000, 334000, 1650000, 667000, 465000, 67455, 90056, 324594],
        borderColor: G400,
        backgroundColor: 'rgba(145, 255, 175, 0.3)',
      },
      {
        fill: true,
        label: 'Tiêu điểm',
        data: [90000, 397000, 309000, 354000, 312000, 274505, 70560, 39005],
        borderColor: B200,
        backgroundColor: 'rgba(127, 230, 255, 0.5)',
      },
      {
        fill: true,
        label: 'Tiêu chéo',
        data: [78945, 834752, 892374, 437863, 93452, 289735, 923582, 48934],
        borderColor: R400,
        backgroundColor: 'rgba(255, 80, 80, 0.5)',
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
        <CustomerLineGraph title='Số giao dịch tích, tiêu điểm và tiêu chéo' data={data} options={options} width='80%'/>
        <div style={{padding: '3rem 3rem 0 3rem'}}>
          <div>
            <h4 style={{margin: 10}}>% Điểm tiêu / tích</h4>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={{margin: 10}}>13.64%</h2>
              <h5 style={{margin: 10}}>+13%</h5>
            </div>
          </div>
          <hr />
          <div>
            <h4 style={{margin: 10}}>% Số giao dịch tiêu/ chéo / Tổng tiêu của CCTV</h4>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={{margin: 10}}>5.70%</h2>
              <h5 style={{margin: 10}}>+6%</h5>
            </div>
          </div>
          <hr />
          <div>
            <h4 style={{margin: 10}}>% Điểm tiêu chéo / Tổng tiêu của CCTV</h4>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={{margin: 10}}>8.20%</h2>
              <h5 style={{margin: 10}}>+4%</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.graphGrid}>
        <CustomerSegment title={'Phân khúc khách hàng'}/>
        {/* <CustomerLineGraph title={'Tỷ lệ phân hạng khách hàng'} /> */}
        <CustomerSegment title={'Tỷ lệ phân hạng khách hàng'}/>
      </div>
      <div className={classes.gridWrapper}>
        {summaryPieCharts.map((pie) => renderPieChart(pie))}
      </div>
    </>
  )
}

export default Summary;