import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { RANKS } from '../../utils/constant';
import { B300 } from '@atlaskit/theme/colors';
import { getValues } from '../../utils/common';

function CustomerRankRatioA() {
  const title = 'Tỷ lệ xếp hạng khách hàng của công ty A';

  // Diamond: 18K
  // Platinum: 191K
  // Gold: 301K
  // Silver: 663K

  const rankList = {
    diamond: {
      label: RANKS.DIAMOND.name,
      data: 18000,
      borderColor: B300,
      backgroundColor: B300,
    },
    platinum: {
      label: RANKS.PLATINUM.name,
      data: 191000,
      borderColor: B300,
      backgroundColor: B300,
    },
    gold: {
      label: RANKS.GOLD.name,
      data: 301000,
      borderColor: B300,
      backgroundColor: B300,
    },
    silver: {
      label: RANKS.SILVER.name,
      data: 663000,
      borderColor: B300,
      backgroundColor: B300,
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

export default CustomerRankRatioA;