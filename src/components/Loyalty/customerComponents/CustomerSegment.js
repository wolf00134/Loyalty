import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  segmentGraph: {
    backgroundColor: N10,
    borderRadius: 6,
    width: '100%',
    padding: '1rem',
    '& > h4': {
      margin: 0,
    }
  }
});

function CustomerSegment({title}) {
  const classes = useStyles();

  return (
    <div className={classes.segmentGraph}>
      <h4>{title}</h4>
    </div>
  )
}

export default CustomerSegment;