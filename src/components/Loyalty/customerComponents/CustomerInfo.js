import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Button from '@atlaskit/button';

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
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    alignItems: 'center',
    gridGap: '1rem',
    textAlign: 'center',
    '& > button': {
      height: '100%',
      alignItems: 'center',
    }
  },
  gridContent: {
    backgroundColor: N10,
    borderRadius: 6,
  },
})

function CustomerInfo() {
  const classes = useStyles();

  const options = [
    {
      name: 'Tất cả'
    },
    {
      name: 'Một phần'
    },
    {
      name: 'Ẩn'
    }
  ];

  return (
    <>
      <div className={classes.contentWrapper}>
          <div className={classes.gridContent}>
              <p>Mã hoặc số điện thoại</p>
          </div>
          <DropdownMenu
            trigger="Tên quà tặng"
            testId="dropdown"
          >
            <DropdownItemGroup>
              {options.map(option => (
                <DropdownItem>{option.name}</DropdownItem>
              ))}
            </DropdownItemGroup>
          </DropdownMenu>
          <DropdownMenu
            trigger="Trạng thái"
            testId="dropdown"
          >
            <DropdownItemGroup>
              {options.map(option => (
                <DropdownItem>{option.name}</DropdownItem>
              ))}
            </DropdownItemGroup>
          </DropdownMenu>
          <div className={classes.gridContent}>
            <p>Thời gian</p>
          </div>
          <Button appearance="danger" style={{height: '100%', alignItems: 'center', borderRadius: 6}}>Tìm kiếm</Button>
      </div>
      <div className={classes.customerContentWrapper}>
        <div>
          <h3>Ngô Thị Hường</h3>
          <h5>ID: 3453094853</h5>
        </div>
        <div className={classes.customerStats}>
          <div>
            <h5>Company B</h5>
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
    </>
  )
}

export default CustomerInfo;