import React from "react";
import { useStyles } from "../Ranking";

function CustomerRankGraph({title}) {
  const classes = useStyles();

  return (
    <div className={classes.graphTitle} style={{margin: 0}}>
      <h4>{title}</h4>
    </div>
  )
}

export default CustomerRankGraph;