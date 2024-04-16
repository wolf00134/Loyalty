import React from "react";
import Button from '@atlaskit/button';
import { createUseStyles } from "react-jss";
import { N10 } from "@atlaskit/theme/colors";
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import TransactionHistory from "./customerComponents/TransactionHistory";

const useStyles = createUseStyles({
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
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
  }
})

function ExpiredPoints() {
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
            trigger="Nguồn tích"
            testId="dropdown"
          >
            <DropdownItemGroup>
              {options.map(option => (
                <DropdownItem>{option.name}</DropdownItem>
              ))}
            </DropdownItemGroup>
          </DropdownMenu>
        <div className={classes.gridContent}>
          <p>Thời gian hết hiệu lực</p>
        </div>
        <Button appearance="danger" style={{height: '100%', alignItems: 'center', borderRadius: 6}}>Tìm kiếm</Button>
      </div>
      <div>
        <TransactionHistory />
      </div>
    </>
  )
}

export default ExpiredPoints;