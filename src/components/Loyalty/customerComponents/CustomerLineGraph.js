import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import Avatar from '@atlaskit/avatar';

const useStyles = createUseStyles({
  lineGraph: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
  }
});

function CustomerLineGraph({title}) {
  const classes = useStyles();

  return (
    <div className={classes.lineGraph}>
      <h4>{title}</h4>
    </div>
  )
}

export default CustomerLineGraph;