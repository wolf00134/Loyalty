import { B300, B400, N10, R100, R200, Y200, Y400 } from "@atlaskit/theme/colors";
import React from "react";
import { createUseStyles } from "react-jss";
import { COMPANIES } from "../../utils/constant";
import { getValues } from "../../utils/common";
import CustomerPieChart from "../GraphComponents/CustomerPieChart";

const useStyles = createUseStyles({
  chartWrapper: {
    backgroundColor: N10,
    width: '50%',
    borderRadius: 6,
    padding: '1rem',
    '& > h3, h4, h1, h5, p': {
      margin: 0,
    },
    '& > hr': {
      margin: 0
    }
  },
})

function TotalCustomerShopA({title, amount, percentage}) {
  const classes = useStyles();

  const companyList = {
    companyA: {
      label: COMPANIES.COMPANY_A.name,
      value: 1580000,
      backgroundColor: B300,
      borderColor: B400,
    },
    companyB: {
      label: COMPANIES.COMPANY_B.name,
      value: 990000,
      backgroundColor: Y200,
      borderColor: Y400,
    },
    companyC: {
      label: COMPANIES.COMPANY_C.name,
      value: 430000,
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
    <div className={classes.chartWrapper}>
      <h4>{title}</h4>
      <h1>{amount}</h1>
      <p style={{marginBottom: '1rem'}}>{`${percentage} so với tháng trước`}</p>
      <div>
        <CustomerPieChart data={data} options={options}/>
      </div>
    </div>
  )
}

export default TotalCustomerShopA;