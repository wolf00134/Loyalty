import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { RANKS } from '../../utils/constant';
import { Y200 } from '@atlaskit/theme/colors';
import { getValues } from '../../utils/common';

function CustomerRankRatioB() {
  const title = 'Tỷ lệ xếp hạng khách hàng của công ty B';

  // Diamond: 18K

  const rankList = {
    diamond: {
      label: RANKS.DIAMOND.name,
      data: 12500,
      borderColor: Y200,
      backgroundColor: Y200,
    },
    platinum: {
      label: RANKS.PLATINUM.name,
      data: 142000,
      borderColor: Y200,
      backgroundColor: Y200,
    },
    gold: {
      label: RANKS.GOLD.name,
      data: 288000,
      borderColor: Y200,
      backgroundColor: Y200,
    },
    silver: {
      label: RANKS.SILVER.name,
      data: 328000,
      borderColor: Y200,
      backgroundColor: Y200,
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

export default CustomerRankRatioB;