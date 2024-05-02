import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { G400, Y200 } from '@atlaskit/theme/colors';
import { DATES } from '../../utils/constant';

function TrendPointsSaved({ title }) {
  const dates = DATES;
  
  const data = {
    labels: dates,
    datasets: [
      {
        type: 'line',
        label: 'Dataset 2',
        data: [320340239, 523894792, 778374583, 1164000000, 1200000000],
        backgroundColor: Y200,
        borderColor: Y200,
        borderWidth: 1,
      },
      {
        type: 'bar',
        label: 'Dataset 1',
        data: [320340239, 523894792, 778374583, 1164000000, 1200000000],
        backgroundColor: G400,
        borderColor: G400,
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

export default TrendPointsSaved;