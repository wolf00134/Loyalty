import { N10 } from "@atlaskit/theme/colors";
import React from "react";
import { createUseStyles } from "react-jss";
import OnboardTrend from "./customerComponents/OnboardTrend";
import MemberByCttv from "./customerComponents/MemberByCttv";
import TrendPointsSaved from "./customerComponents/TrendPointsSaved";
import TrendPointsSpent from "./customerComponents/TrendPointsSpent";

const useStyles = createUseStyles({
  graphContainer: {
    display: 'flex',
    gap: '1rem',

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
      graph: <MemberByCttv />
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
    <>
    <div className={classes.graphContainer}>
      <div className={classes.title} style={{width: '70%'}}>
        <OnboardTrend title='Xu hướng khách hàng onboard' />
      </div>
      <div className={classes.title} style={{width: '30%', display: 'flex', flexDirection: 'column', gap: '3rem'}}>
        <MemberByCttv title='Member theo CTTV' />
      </div>
    </div>
    <div className={classes.graphContainer}>
      <div className={classes.title} style={{width: '50%'}}>
        <TrendPointsSaved title='Xu hướng tích reward points' />
      </div>
      <div className={classes.title} style={{width: '50%'}}>
        <TrendPointsSpent title='Xu hướng tiêu reward points' />
      </div>
    </div>
    </>
  )
}

export default Trend;