import React from 'react';
import { createUseStyles } from 'react-jss';
import TotalCustomers from './customerComponents/TotalCustomers';
import CustomerLineGraph from './customerComponents/CustomerLineGraph';
import CustomerSegment from './customerComponents/CustomerSegment';
import CustomerSystemUsageGraph from './customerComponents/CustomerSystemUsage';

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
        />
        <div className={classes.customerSegment}>
          <CustomerSegment />
          <CustomerSystemUsageGraph />
        </div>
      </div>
    </>
  )
}

export default Member;