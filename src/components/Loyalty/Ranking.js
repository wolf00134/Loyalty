import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import { IoDiamondOutline } from "react-icons/io5";
import { PiShieldStar } from "react-icons/pi";
import { PiMedalLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import CustomerRanks from './customerComponents/CustomerRanks';
import CustomerRankGraph from './GraphComponents/CustomerRankGraph';
import RankUpRatio from './customerComponents/RankUpRatio';
import RankFallRatio from './customerComponents/RankFallRatio';

export const useStyles = createUseStyles({
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '1rem'
  },
  graphWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
  },
  graphTitle: {
    backgroundColor: N10, 
    borderRadius: 6, 
    padding: '1rem',
    '& > h4': {
      margin: '0 0 1rem 0',
    }
  }
})

function Ranking() {
  const classes = useStyles();
  const customerRanks = [
    {
      rank: 'Kim cương',
      amount: '69.4K',
      difference: '-115K',
      icon: <IoDiamondOutline />
    },
    {
      rank: 'Bạch kim',
      amount: '97.5K',
      difference: '-376K',
      icon: <PiShieldStar />
    },
    {
      rank: 'Vàng',
      amount: '1.2M',
      difference: '+28K',
      icon: <PiMedalLight />
    },
    {
      rank: 'Bạc',
      amount: '4.1M',
      difference: '+462K',
      icon: <FaRegStar />
    }
  ];
  const rankGraphs = [
    {
      title: 'Tháp số khách hàng theo hạng lí tưởng'
    },
    {
      title: 'Tháp số khách hàng theo hạng thực tế'
    },
  ]

  const renderContent = (item) => (
    <CustomerRanks 
      rank={item.rank}
      amount={item.amount}
      difference={item.difference}
      icon={item.icon}
    />
  );

  return (
    <>
      <div className={classes.contentWrapper}>
        {customerRanks.map((item) => renderContent(item))}
      </div>
      <div className={classes.graphWrapper}>
        <RankUpRatio />
        <RankFallRatio />
      </div>
    </>
  )
}

export default Ranking;