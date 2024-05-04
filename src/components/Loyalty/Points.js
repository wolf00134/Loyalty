import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import TotalCustomers from './customerComponents/TotalCustomers';
import RevenueOnPointsSaved from './customerComponents/RevenueOnPointsSaved';
import RevenueOnPointsSpend from './customerComponents/RevenueOnPointsSpend';

const useStyles = createUseStyles({
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem',
    width: '60%',
  },
  graph: {
    padding: '1rem',
    backgroundColor: N10,
    borderRadius: 6,
    width: '40%',
    '& > h4': {
      margin: 0,
    }
  },
  lineGraph: {
    padding: '1rem',
    backgroundColor: N10,
    borderRadius: 6,
    '& > h4': {
      margin: 0,
    }
  },
  container: {
    display: 'flex', 
    gap: '1rem',
  },
  graphGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
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
      amount: '965M',
      rate: '3%',
    },
    {
      title:'Tổng khách hàng',
      amount: '3M',
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
    <>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          {fGold.map((gold) => renderContent(gold))}
        </div>
        <div className={classes.graph}>
          <h4>Số giao dịch và tiêu</h4>
        </div>
      </div>
      <div className={classes.graphGrid}>
        <div className={classes.lineGraph}>
          <RevenueOnPointsSaved />
        </div>
        <div className={classes.lineGraph}>
          <RevenueOnPointsSpend />
        </div>
      </div>
    </>
  )
}
export default Points;