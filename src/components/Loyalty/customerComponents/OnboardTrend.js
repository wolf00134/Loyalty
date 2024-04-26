import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { RANKS } from '../../utils/constant';
import { B500 } from '@atlaskit/theme/colors';
import { getDates, getValues } from '../../utils/common';
import dayjs from 'dayjs';

function OnboardTrend({ title }) {
  const currentDate = dayjs();
  const lastDate = currentDate.subtract(5, 'day');
  const dates = getDates(lastDate, currentDate);

  // console.log('RESULTS', getValues(rankList, 'label'))
  
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Dataset',
        data: [212, 216, 230, 337, 287, 287],
        backgroundColor: B500,
        borderColor: B500,
        borderWidth: 1,
      }
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

export default OnboardTrend;