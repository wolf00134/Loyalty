import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import TableTree, { Cell, Header, Headers, Row } from '@atlaskit/table-tree'
import DropdownMenu from '@atlaskit/dropdown-menu';
import { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Button from '@atlaskit/button';
import Lozenge from '@atlaskit/lozenge';

const useStyles = createUseStyles({
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
  historyWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1.2rem',
  }
});

function NetworkPrizeExchange() {
  const classes = useStyles();

  const headers = [
    {
      title: 'Mã khách hàng',
    },
    {
      title: 'Tên khách hàng',
    },
    {
      title: 'Tên quà tặng',
    },
    {
      title: 'Nhà cung cấp',
    },
    {
      title: 'Giá trị reward points',
    },
    {
      title: 'Trạng thái',
    },
    {
      title: 'Thời gian đổi quà',
    },
  ];

  const items = [
    {
      id: '3453094853',
      name: 'Ngô Thị Hường',
      giftNane: 'Phiếu đi chợ Company C trị giá 300.000Đ',
      provider: 'Company C',
      fGoldValue: 30,
      status: <Lozenge appearance='success'><h3>Đã đổi</h3></Lozenge>,
      time: '23/2/2024',
    }
  ];

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
      <div className={classes.historyWrapper}>
          <TableTree>
            <Headers>
              {headers.map((header) => (
                <Header width='100%'>{header.title}</Header>
              ))}
            </Headers>
            {items.map((item) => (
              <Row>
                <Cell>{item.id}</Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.giftNane}</Cell>
                <Cell>{item.provider}</Cell>
                <Cell>{item.fGoldValue}</Cell>
                <Cell>{item.status}</Cell>
                <Cell>{item.time}</Cell>
              </Row>
            ))}
          </TableTree>
      </div>
    </>
  )
}

export default NetworkPrizeExchange;