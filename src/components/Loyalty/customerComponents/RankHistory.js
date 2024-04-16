import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import TableTree, { Cell, Header, Headers, Row } from '@atlaskit/table-tree'

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

function RanksHistory({ headers, items }) {
  const classes = useStyles();

  return (
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
                <Cell>{item.rank}</Cell>
                <Cell>{item.time}</Cell>
              </Row>
          ))}
        </TableTree>
      </div>
  )
}

export default RanksHistory;