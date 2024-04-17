import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import TableTree, { Cell, Header, Headers, Row } from '@atlaskit/table-tree'
import Button from "@atlaskit/button";
import { customerActions } from '../../redux/customer/slice';
import { RIGHT_PAGE_CONTENT } from '../../utils/constant';

const useStyles = createUseStyles({
  historyWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: '1.2rem',
  }
})

function CustomerAccountBalances({ headers, items }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.historyWrapper}>
      <TableTree>
          <Headers>
            {headers.map((header) => (
              <Header key={header.key} width='100%'>{header.title}</Header>
            ))}
          </Headers>
          {items.map((item) => (
              <Row key={item.key}>
                <Cell>{item.id}</Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.phone_number}</Cell>
                <Cell>{item.onboarding_date}</Cell>
                <Cell>{item.ranking_point}</Cell>
                <Cell>{item.reward_point}</Cell>
                <Cell>
                  <Button appearance="primary" onClick={(e) => {
                    e.stopPropagation()
                    dispatch(customerActions.setSelectedCustomer({ selectedCustomer: item}));
                    dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.ACCCOUNT_BALANCE_DETAILS))
                  }}>Chi tiết</Button>
                </Cell>
              </Row>
          ))}
      </TableTree>
    </div>
  )
}

export default CustomerAccountBalances;