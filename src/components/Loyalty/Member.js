import React from 'react';
import { createUseStyles } from 'react-jss';
import TotalCustomers from './customerComponents/TotalCustomers';
import CustomerLineGraph from './GraphComponents/CustomerLineGraph';
import CustomerSegment from './customerComponents/CustomerSegment';
import CustomerSystemUsageGraph from './customerComponents/CustomerSystemUsage';
import { B75 } from '@atlaskit/theme/colors';
import { DATES } from '../utils/constant';

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
  const title = 'Phân khúc khách hàng';
  const dates = DATES;
  console.log('DATES', dates);

  const data = {
    labels: dates,
    datasets: [
      {
        fill: true,
        data: [394857, 782398,1793485,2450000,3000000],
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
      title: 'Tổng giao dịch',
      amount: '9M',
      percentage: '13%',
    },
    {
      title: 'Tổng khách hàng mới',
      amount: '550K',
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