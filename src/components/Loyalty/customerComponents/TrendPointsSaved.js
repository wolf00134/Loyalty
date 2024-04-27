import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { G400, Y200 } from '@atlaskit/theme/colors';
import { getDates } from '../../utils/common';
import dayjs from 'dayjs';

function TrendPointsSaved({ title }) {
  const currentDate = dayjs();
  const lastDate = currentDate.subtract(5, 'day');
  const dates = getDates(lastDate, currentDate);
  
  const data = {
    labels: dates,
    datasets: [
      {
        type: 'line',
        label: 'Dataset 2',
        data: [100000, 100000, 125000, 110000, 115000, 123000],
        backgroundColor: Y200,
        borderColor: Y200,
        borderWidth: 1,
      },
      {
        type: 'bar',
        label: 'Dataset 1',
        data: [100000, 100000, 125000, 110000, 115000, 123000],
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