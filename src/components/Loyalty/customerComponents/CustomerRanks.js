import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import Avatar from '@atlaskit/avatar';

const useStyles = createUseStyles({
  content: {
    backgroundColor: N10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: '0.5rem',
    '& > h2, h5, h4': {
      margin: 0,
    }
  },
  rankInfo: {
    display:' flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

function CustomerRanks({ rank, amount, icon}) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.rankInfo}>
        <h4>{rank}</h4>
        {icon}
      </div>
      <h2>{amount}</h2>
    </div>
  )
}

export default CustomerRanks;