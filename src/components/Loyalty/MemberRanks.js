import React from "react";
import { createUseStyles } from 'react-jss';
import { N10 } from "@atlaskit/theme/colors";
import DropdownMenu, { DropdownItem, DropdownItemGroup } from "@atlaskit/dropdown-menu";
import CustomerRanksDetails from "./customerComponents/CustomerRanksDetails";
import Button from "@atlaskit/button";

const useStyles = createUseStyles({
  contentWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
    width: '100%',
    '& > h4, h3, p': {
      margin: '5px 0 0 0',
    }
  },
  headerWrapper: {
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
  }
})

function MemberRanks() {
  const classes = useStyles();

  const headers = [
    {
      key: 1,
      title: 'Mã khách hàng',
    },
    {
      key: 2,
      title: 'Họ và tên'
    },
    {
      key: 3,
      title: 'Số điện thoại'
    },
    {
      key: 4,
      title: 'CCTV'
    },
    {
      key: 5,
      title: 'Điểm xếp hạng'
    },
    {
      key: 6,
      title: 'Hạng hiện tại'
    },
    {
      key: 7,
      title: 'Thời gian thay đổi'
    },
    {
      key: 8,
      title: ''
    },
  ];
  const options = [
    {
      key: 1,
      name: 'Tất cả'
    },
    {
      key: 2,
      name: 'Một phần'
    },
    {
      key: 3,
      name: 'Ẩn'
    }
  ];

  const customers = [
    {
      key: 1,
      id: '5876983745',
      name: 'Ngô Thị Hường',
      phone: '03948583745',
      cctv: 'Shop B',
      rankPoint: 2102,
      currentRank: 'Bạch kim',
      timeChanged: '2023-12-06',
    },
    {
      key: 2,
      id: '5876983746',
      name: 'Nguyễn Duy Hưng',
      phone: '039345457456',
      cctv: 'Shop A',
      rankPoint: 6071,
      currentRank: 'Kim cương',
      timeChanged: '2023-12-15',
    },
  ];

  return (
    <>
    <div className={classes.headerWrapper}>
        <div className={classes.gridContent}>
            <p>Mã hoặc số điện thoại</p>
        </div>
        <DropdownMenu
          trigger="Tên quà tặng"
          testId="dropdown"
        >
          <DropdownItemGroup>
            {options.map(option => (
              <DropdownItem key={option.key}>{option.name}</DropdownItem>
            ))}
          </DropdownItemGroup>
        </DropdownMenu>
        <DropdownMenu
          trigger="Trạng thái"
        >
          <DropdownItemGroup>
            {options.map(option => (
              <DropdownItem key={option.key}>{option.name}</DropdownItem>
            ))}
          </DropdownItemGroup>
        </DropdownMenu>
        <div className={classes.gridContent}>
          <p>Thời gian</p>
        </div>
        <Button appearance="danger" style={{height: '100%', alignItems: 'center', borderRadius: 6}}>Tìm kiếm</Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <div className={classes.contentWrapper}>
          <CustomerRanksDetails headers={headers} items={customers}/>
        </div>
      </div>
    </>
  )
}

export default MemberRanks;