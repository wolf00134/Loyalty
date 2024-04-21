import React from 'react';
import CustomerRankGraph from './CustomerRankGraph';
import { RANKS } from '../../utils/constant';
import { B500 } from '@atlaskit/theme/colors';
import { getValues } from '../../utils/common';

function RankFallRatio() {
  const title = 'Tỷ lệ khách hàng rớt hạng';
  const rankList = {
    diamond: {
      label: RANKS.DIAMOND.name,
      data: 5,
      borderColor: B500,
      backgroundColor: B500,
    },
    platinum: {
      label: RANKS.PLATINUM.name,
      data: 3,
      borderColor: B500,
      backgroundColor: B500,
    },
    gold: {
      label: RANKS.GOLD.name,
      data: 35,
      borderColor: B500,
      backgroundColor: B500,
    },
    silver: {
      label: RANKS.SILVER.name,
      data: 5,
      borderColor: B500,
      backgroundColor: B500,
    },
  };

  console.log('RESULTS', getValues(rankList, 'label'))
  
  const data = {
    labels: getValues(rankList, 'label'),
    datasets: [
      {
        label: 'Dataset',
        data: getValues(rankList, 'data'),
        backgroundColor: getValues(rankList, 'backgroundColor'),
        borderColor: getValues(rankList, 'borderColor'),
        borderWidth: 1,
      }
    ]
  };
  
  const options = {
    // indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    }
  }

  return (
    <CustomerRankGraph title={title} data={data} options={options} />
  )
}

export default RankFallRatio;