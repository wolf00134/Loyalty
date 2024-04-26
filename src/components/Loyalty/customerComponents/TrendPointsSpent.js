import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { R400, Y200 } from '@atlaskit/theme/colors';
import { getDates } from '../../utils/common';
import dayjs from 'dayjs';

function TrendPointsSpent({ title }) {
  const currentDate = dayjs();
  const lastDate = currentDate.subtract(5, 'day');
  const dates = getDates(lastDate, currentDate);

  // console.log('RESULTS', getValues(rankList, 'label'))
  
  const data = {
    labels: dates,
    datasets: [
      {
        type: 'line',
        label: 'Dataset 2',
        data: [154000, 145000, 217000, 139000, 181000, 236000],
        backgroundColor: Y200,
        borderColor: Y200,
        borderWidth: 1,
      },
      {
        type: 'bar',
        label: 'Dataset 1',
        data: [154000, 145000, 217000, 139000, 181000, 236000],
        backgroundColor: R400,
        borderColor: R400,
        borderWidth: 1,
      },
    ]
  };
  
  const options = {
    responsive: true,
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