import React from 'react';
import { COMPANIES } from '../../utils/constant';
import { B300, B400, R100, R200, Y200, Y400 } from '@atlaskit/theme/colors';
import { getValues } from '../../utils/common';
import CustomerPieChart from '../GraphComponents/CustomerPieChart';

function MemberByCttv({ title }) {
  const companyList = {
    companyA: {
      label: COMPANIES.COMPANY_A.name,
      value: '27',
      backgroundColor: B300,
      borderColor: B400,
    },
    companyB: {
      label: COMPANIES.COMPANY_B.name,
      value: '61',
      backgroundColor: Y200,
      borderColor: Y400,
    },
    companyC: {
      label: COMPANIES.COMPANY_C.name,
      value: '12',
      backgroundColor: R100,
      borderColor: R200,
    },
  };

  const data = {
    labels: getValues(companyList, 'label'),
    datasets: [
      {
        label: '# CCTV',
        data: getValues(companyList, 'value'),
        backgroundColor: getValues(companyList, 'backgroundColor'),
        borderColor: getValues(companyList, 'borderColor'),
        borderWidth: 1,
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          useBorderRadius: true,
          borderRadius: 100,
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      tooltips: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        callbacks: {
          label(tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
    },
    cutout: '60%',
  };

  return (
    <>
      <h4>{title}</h4>
        <CustomerPieChart data={data} options={options}/>
    </>
  )
}

export default MemberByCttv;