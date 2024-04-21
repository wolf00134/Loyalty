import React from 'react';
import CustomerRankGraph from './CustomerRankGraph';
import { getValues } from '../../utils/common';
import { RANKS, SHOPS } from '../../utils/constant';
import { B500, G100, Y200 } from '@atlaskit/theme/colors';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function RankUpRatio() {
  const title = 'Tỷ lệ khách hàng tăng hạng';
  const rankList = {
    diamond: {
      label: RANKS.DIAMOND.name,
      shopA: {
        label: SHOPS.SHOP_A.name,
        data: 16,
        borderColor: B500,
        backgroundColor: B500,
      },
      shopB: {
        label: SHOPS.SHOP_B.name,
        data: 12,
        borderColor: G100,
        backgroundColor: G100,
      },
      shopC: {
        label: SHOPS.SHOP_C.name,
        data: 10,
        borderColor: Y200,
        backgroundColor: Y200,
      },
    },
    platinum: {
      label: RANKS.PLATINUM.name,
      shopA: {
        label: SHOPS.SHOP_A.name,
        data: 19,
        borderColor: B500,
        backgroundColor: B500,
      },
      shopB: {
        label: SHOPS.SHOP_B.name,
        data: 9,
        borderColor: G100,
        backgroundColor: G100,
      },
      shopC: {
        label: SHOPS.SHOP_C.name,
        data: 11,
        borderColor: Y200,
        backgroundColor: Y200,
      },
    },
    gold: {
      label: RANKS.GOLD.name,
      shopA: {
        label: SHOPS.SHOP_A.name,
        data: 60,
        borderColor: B500,
        backgroundColor: B500,
      },
      shopB: {
        label: SHOPS.SHOP_B.name,
        data: 23,
        borderColor: G100,
        backgroundColor: G100,
      },
      shopC: {
        label: SHOPS.SHOP_C.name,
        data: 27,
        borderColor: Y200,
        backgroundColor: Y200,
      },
    },
    silver: {
      label: RANKS.SILVER.name,
      shopA: {
        label: SHOPS.SHOP_A.name,
        data: 68,
        borderColor: B500,
        backgroundColor: B500,
      },
      shopB: {
        label: SHOPS.SHOP_B.name,
        data: 38,
        borderColor: G100,
        backgroundColor: G100,
      },
      shopC: {
        label: SHOPS.SHOP_C.name,
        data: 26,
        borderColor: Y200,
        backgroundColor: Y200,
      },
    },
  };

  const shopA = getValues(rankList, 'shopA');
  const shopB = getValues(rankList, 'shopB');
  const shopC = getValues(rankList, 'shopC');

  const shopAName = getValues(shopA, 'label');
  const shopBName = getValues(shopB, 'label');
  const shopCName = getValues(shopC, 'label');

  const data = {
    labels: getValues(rankList, 'label'),
    datasets: [
      {
        label: shopAName[0],
        data: getValues(shopA, 'data'),
        backgroundColor: getValues(shopA, 'backgroundColor'),
        borderColor: getValues(shopA, 'borderColor'),
        borderWidth: 1,
      },
      {
        label: shopBName[0],
        data: getValues(shopB, 'data'),
        backgroundColor: getValues(shopB, 'backgroundColor'),
        borderColor: getValues(shopB, 'borderColor'),
        borderWidth: 1,
      },
      {
        label: shopCName[0],
        data: getValues(shopC, 'data'),
        backgroundColor: getValues(shopC, 'backgroundColor'),
        borderColor: getValues(shopC, 'borderColor'),
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <CustomerRankGraph title={title} data={data} options={options}/>
  )
}

export default RankUpRatio;