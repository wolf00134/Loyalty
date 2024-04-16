import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  basicDetail: {
    display: 'flex',
    gap: 20,
    justifyContent: 'space-between',
  },
  customerDetailWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1.2rem',
    width: '40%',
  }
})

function CustomerBasicDetails() {
  const classes = useStyles();

  return (
    <div className={classes.customerDetailWrapper}>
      <h3 style={{ marginBottom: 0 }}>Thông tin khách hàng</h3>
      <div className={classes.basicDetail}>
        <div>
          <div>
            <h5>Ngày sinh</h5>
            <h4>1993-12-13</h4>
          </div>
          <div>
            <h5>Điện thoại</h5>
            <h4>+8439847534</h4>
          </div>
          <div>
            <h5>Thời gian đăng kí</h5>
            <h4>2022-06-20</h4>
          </div>
          <div>
            <h5>Địa chỉ</h5>
            <h4>Quận 7, TP HCM</h4>
          </div>
        </div>
        <div>
        <div>
          <h5>Giới tính</h5>
          <h4>Nam</h4>
        </div>
        <div>
          <h5>Email</h5>
          <h4>boom@gmail.com</h4>
        </div>
        <div>
          <h5>Giao dịch gần nhất</h5>
          <h4>2023-10-20 19:35</h4>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerBasicDetails;