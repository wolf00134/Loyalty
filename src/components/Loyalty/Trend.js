import { N10 } from "@atlaskit/theme/colors";
import React from "react";
import { createUseStyles } from "react-jss";
import OnboardTrend from "./customerComponents/OnboardTrend";

const useStyles = createUseStyles({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
  },
  title: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
    '& > h4': {
      margin: 0,
    }
  }
});

function Trend() {
  const classes = useStyles();
  const graphTitle = [
    {
      title: 'Xu hướng khách hàng onboard',
      graph: <OnboardTrend />
    },
    {
      title: 'Member theo CCTV',
      graph: <OnboardTrend />
    },
    {
      title: 'Xu hướng tích reward points',
      graph: <OnboardTrend />
    },
    {
      title: 'Xu hướng tiêu reward points',
      graph: <OnboardTrend />
    },
  ];

  const renderGraphTitle = (t) => (
    <div className={classes.title}>
      <h4>
        {t.title}
      </h4>
        {t.graph}
    </div>
  );

  return (
    <div className={classes.gridContainer}>
      {graphTitle.map((t) => renderGraphTitle(t))}
    </div>
  )
}

export default Trend;