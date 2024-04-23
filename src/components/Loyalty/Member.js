import React from 'react';
import { createUseStyles } from 'react-jss';
import TotalCustomers from './customerComponents/TotalCustomers';
import CustomerLineGraph from './GraphComponents/CustomerLineGraph';
import CustomerSegment from './customerComponents/CustomerSegment';
import CustomerSystemUsageGraph from './customerComponents/CustomerSystemUsage';
import { B75 } from '@atlaskit/theme/colors';
import dayjs from 'dayjs';
import { getDates } from '../utils/common';

const useStyles = createUseStyles({
  reportWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
  },
  graphWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  customerSegment: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
  },
})

function Member() {
  const classes = useStyles();
  const currentDate = dayjs();
  const lastDate = currentDate.subtract(1, 'week');
  const dates = getDates(lastDate, currentDate);
  const title = 'Phân khúc khách hàng';
  console.log('DATES', dates);

  const data = {
    labels: dates,
    datasets: [
      {
        fill: true,
        data: [20000, 25694,10020,30293,5833,3455,9056,32454],
        borderColor: B75,
        backgroundColor: 'rgba(118,199,255, 0.3)',
      }
    ]
  }

  const totalCustomers = [
    {
      title: 'Tổng khách hàng',
      amount: '3M',
      percentage: '13%',
    },
    {
      title: 'Tổng khách hàng có giao dịch',
      amount: '3.4M',
      percentage: '13%',
    },
    {
      title: 'Tổng khách hàng mới',
      amount: '288K',
      percentage: '13%',
    },
  ];

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    }
  }

  const renderTotalCustomers = (customer) => (
    <TotalCustomers
      title={customer.title}
      amount={customer.amount}
      percentage={customer.percentage}
    />
  )

  return (
    <>
      <div className={classes.reportWrapper}>
        {totalCustomers.map((customer) => renderTotalCustomers(customer))}
      </div>
      <div className={classes.graphWrapper}>
        <CustomerLineGraph 
          title='Tỉ lệ tăng giảm khách hàng'
          data={data}
          options={options}
        />
        <div className={classes.customerSegment}>
          <CustomerSegment title={title}/>
          <CustomerSystemUsageGraph />
        </div>
      </div>
    </>
  )
}

export default Member;