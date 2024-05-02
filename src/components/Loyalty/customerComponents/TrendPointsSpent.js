import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { R400, Y200 } from '@atlaskit/theme/colors';
import { DATES } from '../../utils/constant';

function TrendPointsSpent({ title }) {
  const dates = DATES;

  // console.log('RESULTS', getValues(rankList, 'label'))
  
  const data = {
    labels: dates,
    datasets: [
      {
        type: 'line',
        label: 'Dataset 2',
        data: [392387482, 489375346, 582374598, 820250000, 965000000],
        backgroundColor: Y200,
        borderColor: Y200,
        borderWidth: 1,
      },
      {
        type: 'bar',
        label: 'Dataset 1',
        data: [392387482, 489375346, 582374598, 820250000, 965000000],
        backgroundColor: R400,
        borderColor: R400,
        borderWidth: 1,
      },
    ]
  };
  
  const options = {
    responsive: true,
    barThickness: 40,
    pointBorderWidth: 5,
    plugins: {
      legend: {
        display: false,
      }
    }
  }

  return (
    <>
      <h4>{title}</h4>
      <CustomerRankGraph data={data} options={options} />
    </>
  )
}

export default TrendPointsSpent;