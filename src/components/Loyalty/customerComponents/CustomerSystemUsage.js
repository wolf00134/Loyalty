import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  systemUsageGraph: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
    '& > h4': {
      margin: 0,
    }
  }
});

function CustomerSystemUsageGraph() {
  const classes = useStyles();

  return (
    <div className={classes.systemUsageGraph}>
      <h4>Tỉ lệ khách hàng tiếp tục sử dụng hệ thống</h4>
    </div>
  )
}

export default CustomerSystemUsageGraph;