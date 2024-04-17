import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import TotalCustomers from './customerComponents/TotalCustomers';

const useStyles = createUseStyles({
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
  },
  graph: {
    padding: '1rem',
    backgroundColor: N10,
    borderRadius: 6,
    width: '60%',
    '& > h4': {
      margin: 0,
    }
  },
  container: {
    display: 'flex', 
    gap: '1rem',
  }
})

function Points() {
  const classes = useStyles();
  const fGold = [
    {
      title:'Tổng reward points tích',
      amount: '1.2B',
      rate: '10%',
    },
    {
      title:'Tổng reward points tiêu',
      amount: '6.8M',
      rate: '3%',
    },
    {
      title:'Tổng reward points tiêu chéo',
      amount: '24.6M',
      rate: '14%',
    },
    {
      title:'Tổng khách hàng',
      amount: '3.8M',
      rate: '10%',
    },
  ];

  const renderContent = (gold) => (
    <TotalCustomers 
      title={gold.title}
      amount={gold.amount}
      percentage={gold.rate}
    />
  )

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        {fGold.map((gold) => renderContent(gold))}
      </div>
      <div className={classes.graph}>
        <h4>Số giao dịch, tiêu và tiêu chéo</h4>
      </div>
    </div>
  )
}
export default Points;