import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import Shop from './shops';

const useStyles = createUseStyles({
  reportWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
  },
  report: {
    backgroundColor: N10,
    borderRadius: 6,
    '& > h3, h4, h1, h5, p': {
      margin: 0,
    },
  },
  gridHeader: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'baseline',
  },
  shopTransaction: {
    padding: '1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }
})

function TotalCustomers({ title, amount, percentage }) {
  const classes = useStyles();

  const shops = [
    {
      src: 'fptShop.png',
      name: 'Company A',
      amount: '580K',
      percentage: '5%',
    },
    {
      src: 'fptTelecom.png',
      name: 'Company B',
      amount: '580K',
      percentage: '5%',
    },
    {
      src: 'sendo.png',
      name: 'Company C',
      amount: '580K',
      percentage: '5%',
    },
  ];

  const renderShops = (shop) => (
    <Shop 
      src={shop.src}
      name={shop.name}
      amount={shop.amount}
      percentage={shop.percentage}
    />
  )

  return (
    <div className={classes.report}>
      <div style={{padding: '1rem'}}>
        <h4>{title}</h4>
        <h1>{amount}</h1>
        <p>{`${percentage} so với tháng trước`}</p>
      </div>
      {/* <div className={classes.shopTransaction}>
        {shops.map((shop) => renderShops(shop))}
      </div> */}
    </div>
  )
}

export default TotalCustomers;