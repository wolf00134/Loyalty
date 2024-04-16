import React from 'react';
import CustomerInfo from './customerComponents/CustomerInfo';
import CustomerBasicDetails from './customerComponents/CustomerBasicDetails';
import TransactionHistory from './customerComponents/TransactionHistory';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  customerWrapper: {
    display: 'flex',
    gap: '1rem',
  }
})

function Customer() {
  const classes = useStyles();

  return (
    <>
      <CustomerInfo />
      <div className={classes.customerWrapper}>
        <CustomerBasicDetails />
        <TransactionHistory />
      </div>
    </>
  )
}

export default Customer;