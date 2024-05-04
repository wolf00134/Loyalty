import React from 'react';
import { N10 } from '@atlaskit/theme/colors';
import { createUseStyles } from 'react-jss';
import { IoDiamondOutline } from "react-icons/io5";
import { PiShieldStar } from "react-icons/pi";
import { PiMedalLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import CustomerRanks from './customerComponents/CustomerRanks';
import CustomerRankRatioA from './customerComponents/CustomerRankRatioA';
import CustomerRankRatioB from './customerComponents/CustomerRankRatioB';
import CustomerRankRatioC from './customerComponents/CustomerRankRatioC';

export const useStyles = createUseStyles({
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '1rem'
  },
  graphWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
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
      amount: '140K',
      difference: '-115K',
      icon: <IoDiamondOutline />
    },
    {
      rank: 'Bạch kim',
      amount: '380K',
      difference: '-376K',
      icon: <PiShieldStar />
    },
    {
      rank: 'Vàng',
      amount: '980K',
      difference: '+28K',
      icon: <PiMedalLight />
    },
    {
      rank: 'Bạc',
      amount: '1.5M',
      difference: '+462K',
      icon: <FaRegStar />
    }
  ];

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
        <CustomerRankRatioA />
        <CustomerRankRatioB />
        <CustomerRankRatioC />
      </div>
    </>
  )
}

export default Ranking;