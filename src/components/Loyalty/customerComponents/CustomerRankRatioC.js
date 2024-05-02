import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { RANKS } from '../../utils/constant';
import { R100 } from '@atlaskit/theme/colors';
import { getValues } from '../../utils/common';

function CustomerRankRatioC() {
  const title = 'Tỷ lệ xếp hạng khách hàng của công ty C';

  // Diamond: 18K

  const rankList = {
    diamond: {
      label: RANKS.DIAMOND.name,
      data: 9500,
      borderColor: R100,
      backgroundColor: R100,
    },
    platinum: {
      label: RANKS.PLATINUM.name,
      data: 49000,
      borderColor: R100,
      backgroundColor: R100,
    },
    gold: {
      label: RANKS.GOLD.name,
      data: 191000,
      borderColor: R100,
      backgroundColor: R100,
    },
    silver: {
      label: RANKS.SILVER.name,
      data: 209000,
      borderColor: R100,
      backgroundColor: R100,
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

export default CustomerRankRatioC;