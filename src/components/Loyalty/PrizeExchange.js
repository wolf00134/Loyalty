import React from "react";
import CustomerInfo from "./customerComponents/CustomerInfo";
import TransactionHistory from "./customerComponents/TransactionHistory";
import { createUseStyles } from "react-jss";
import Lozenge from "@atlaskit/lozenge";
import TableTree from "@atlaskit/table-tree";
import { Cell, Header, Headers, Row } from "@atlaskit/table-tree";
import { N10 } from '@atlaskit/theme/colors';

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
  historyWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1.2rem',
  }
});

function PrizeExchange() {
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
      giftNane: 'Phiếu đi chợ Company C trị giá 30.000Đ',
      provider: 'Company C',
      fGoldValue: 300,
      status: <Lozenge appearance='success'><h3>Đã đổi</h3></Lozenge>,
      time: '23/2/2024',
    }
  ];

  return (
    <>
      <CustomerInfo />
      {/* <TransactionHistory /> */}
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

export default PrizeExchange;