import React from "react";
import { N10 } from '@atlaskit/theme/colors';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import Avatar from '@atlaskit/avatar';

const useStyles = createUseStyles({
  contentWrapper: {
    display: 'flex',
    gap: '1rem',
  },
  basicDetail: {
    display: 'flex',
    gap: 20,
    justifyContent: 'space-between',
  },
  customerDetailWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1.2rem',
    '& > h3, h4': {
      margin: '10px 0 0 0',
    }
  },
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridGap: '1rem',
    marginTop: '1.5rem',
  },
  shop: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  fGoldContent: {
    width: '100%',
    gap: '1rem',
    display: 'flex',
    flexDirection: 'column',
  }
})

function AccountBalanceDetail() {
  const classes = useStyles();
  const selectedCustomer = useSelector((state) => state.customer.selectedCustomer);

  const shops = [
    {
      key: 1,
      name: 'Shop A',
      amount: 580,
      src: 'fptShop.png',
    },
    {
      key: 2,
      name: 'Shop B',
      amount: 250,
      src: "fptTelecom.png",
    },
    {
      key: 3,
      name: 'Shop C',
      amount: 114,
      src: "sendo.png",
    },
    {
      key: 4,
      name: 'Shop F',
      amount: 464,
      src: "fpt.png",
    },
    {
      key: 5,
      name: 'Shop E',
      amount: 464,
      src: "longChau.png",
    },
  ];

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.customerDetailWrapper} style={{ width: '30%'}}>
        <h3 style={{ marginBottom: 0 }}>Thông tin khách hàng</h3>
        <div className={classes.basicDetail}>
          <div>
            <div>
              <h5>Tên khách hàng</h5>
              <h4>{selectedCustomer.name}</h4>
            </div>
            <div>
              <h5>Mã khách hàng</h5>
              <h4>{selectedCustomer.id}</h4>
            </div>
            <div>
              <h5>Số điện thoại</h5>
              <h4>{selectedCustomer.phone_number}</h4>
            </div>
            <div>
              <h5>Địa chỉ ví</h5>
              <h4>{selectedCustomer.walletAddress}</h4>
            </div>
            <div>
              <h5>Số dư ví</h5>
              <h4>{selectedCustomer.walletBalance}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fGoldContent}>
        <div className={classes.customerDetailWrapper}>
          <h4>Tổng reward points tích</h4>
          <h3>{selectedCustomer.fGoldSaved}</h3>
          <hr />
          <div className={classes.gridWrapper}>
            {shops.map((shop) => (
              <div key={shop.key} className={classes.shop}>
                {/* <Avatar size="medium" appearance="square" src={shop.src}/> */}
                <div>
                  <p style={{margin: 0}}>{shop.name}</p>
                  <h4 style={{margin: 0}}>{shop.amount}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.customerDetailWrapper}>
          <h4>Tổng reward points tiêu</h4>
          <h3>{selectedCustomer.fGoldSpent}</h3>
          <hr />
          <div className={classes.gridWrapper}>
            {shops.map((shop) => (
              <div key={shop.key} className={classes.shop}>
                {/* <Avatar size="medium" appearance="square" src={shop.src}/> */}
                <div>
                  <p style={{margin: 0}}>{shop.name}</p>
                  <h4 style={{margin: 0}}>{shop.amount}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountBalanceDetail;