import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  customerContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: N10,
    padding: '1.2rem',
    borderRadius: 6,
  },
  customerStats: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 60,
  }
})

function CustomerInfo() {
  const classes = useStyles();

  return (
    <div className={classes.customerContentWrapper}>
      <div>
        <h3>Nguyễn Hùng Sơn</h3>
        <h5>FPT ID: 3847684576043</h5>
      </div>
      <div className={classes.customerStats}>
        <div>
          <h5>Shop B</h5>
          <h5>CCTV</h5>
        </div>
        <div>
          <h5>Kim Cương</h5>
          <h5>Hạng</h5>
        </div>
        <div>
          <h5>2,920</h5>
          <h5>Tổng Reward points</h5>
        </div>
        <div>
          <h5>12,202</h5>
          <h5>Reward points hết hạn</h5>
        </div>
      </div>
    </div>
  )
}

export default CustomerInfo;