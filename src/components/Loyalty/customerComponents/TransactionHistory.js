import React, { useEffect, useState } from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree'
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from '@atlaskit/modal-dialog';
import Button from "@atlaskit/button";
import NearExpiredPoints from '../NearExpiredPoints';
import NearExpiredPointsModal from '../modals/NearExpiredPointsModal';

const useStyles = createUseStyles({
  historyWrapper: {
    width: ({rightPageContent}) => rightPageContent.name === 'customer' && '100%',
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1.2rem',
  }
})

function TransactionHistory() {
  const rightPageContent = useSelector((state)=> state.customer.rightPageContent);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const classes = useStyles({rightPageContent});
  const headers = [
    {
      title: 'Mã khách hàng',
    },
    {
      title: 'Tên hách hàng',
    },
    {
      title: 'Điện thoại',
    },
    {
      title: 'Nguồn tích',
    },
    {
      title: 'Reward points đã hết hạn',
    },
    {
      title: 'Hết hiệu lực',
    },
    {
      title: 'Trừ điểm hết hạn',
    },
  ];
  const items = [
    {
      id: '3453094853',
      name: 'Ngô Thị Hường',
      phone: '2387598792',
      source: 'Company C',
      rewardPoints: 300,
      expiredDate: '16/12/2023',
      minus: '16/12/2023',
    }
  ];

  return (
    <>
      <div className={classes.historyWrapper}>
        <h3>Lịch sử giao dịch</h3>
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
                <Cell>{item.phone}</Cell>
                <Cell>{item.source}</Cell>
                <Cell>{item.rewardPoints}</Cell>
                <Cell>{item.expiredDate}</Cell>
                <Cell>{item.minus}</Cell>
              </Row>
          ))}
        </TableTree>
      </div>
    </>
  )
}

export default TransactionHistory;