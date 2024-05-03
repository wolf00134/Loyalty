import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import TableTree, { Cell, Header, Headers, Row } from '@atlaskit/table-tree'
import DropdownMenu from '@atlaskit/dropdown-menu';
import { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Button from '@atlaskit/button';

const useStyles = createUseStyles({
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
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

function AdjustTransactions() {
  const classes = useStyles();
  const headers = [
    {
      title: 'Mã khách hàng',
    },
    {
      title: 'Mã giao dịch',
    },
    {
      title: 'Loại giao dịch',
    },
    {
      title: 'CCTV',
    },
    {
      title: 'Reward points tích',
    },
    {
      title: 'Reward points tiêu',
    },
    {
      title: 'Reward points điều chỉnh',
    },
    {
      title: 'Thời gian',
    },
  ];
  const items = [
    {
      id: '3453094853',
      transactionCode: 'cErge34VBBE3dfg45dfgg4hvv',
      transactionType: '2387598792',
      cctv: 'Company C',
      fGoldSaved: 300,
      fGoldSpent: 100,
      fGoldAdjusted: 25,
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
          trigger="Mã giao dịch"
          testId="dropdown"
        >
          <DropdownItemGroup>
            {options.map(option => (
              <DropdownItem>{option.name}</DropdownItem>
            ))}
          </DropdownItemGroup>
        </DropdownMenu>
        <div className={classes.gridContent}>
          <p>CCTV điều chỉnh</p>
        </div>
        <div className={classes.gridContent}>
          <p>Loại giao dịch</p>
        </div>
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
              <Cell>{item.transactionCode}</Cell>
              <Cell>{item.transactionType}</Cell>
              <Cell>{item.cctv}</Cell>
              <Cell>{item.fGoldSaved}</Cell>
              <Cell>{item.fGoldSpent}</Cell>
              <Cell>{item.fGoldAdjusted}</Cell>
              <Cell>{item.time}</Cell>
            </Row>
          ))}
        </TableTree>
      </div>
    </>
  )
}

export default AdjustTransactions;