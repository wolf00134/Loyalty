import React from 'react';
import CustomerRankGraph from '../GraphComponents/CustomerRankGraph';
import { DATES } from '../../utils/constant';
import { B500 } from '@atlaskit/theme/colors';

function OnboardTrend({ title }) {
  const dates = DATES;

  // console.log('RESULTS', getValues(rankList, 'label'))
  
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Dataset',
        data: [68500, 97000, 132000, 262000, 550000],
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