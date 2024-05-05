import React from "react";
import { G400, R400, Y200 } from "@atlaskit/theme/colors";
import CustomerLineGraph from "../GraphComponents/CustomerLineGraph";
import { DATES } from "../../utils/constant";

function RevenueOccurance() {
  const dates = DATES;

  const data = {
    labels: dates,
    datasets: [
      {
        fill: true,
        label: 'Company A',
        data: [4521000000, 6128000000, 7322000000, 9625000000, 10825000000],
        borderColor: G400,
        backgroundColor: 'rgba(145, 255, 175, 0.3)',
      },
      {
        fill: true,
        label: 'Company B',
        data: [1095000000, 2530000000, 3798000000, 4195000000, 6495000000],
        borderColor: Y200,
        backgroundColor: 'rgba(251, 247, 88, 0.3)',
      },
      {
        fill: true,
        label: 'Company C',
        data: [520000000, 700400000, 950000000, 2345000000, 4330000000],
        borderColor: R400,
        backgroundColor: 'rgba(255, 80, 80, 0.3)',
      },
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          useBorderRadius: true,
          borderRadius: 5,
          boxWidth: 10,
          boxHeight: 10,
        },
      }
    }
  }

  return (
    <CustomerLineGraph
      title='Tăng trưởng doanh thu'
      data={data}
      options={options}
    />
  )
}

export default RevenueOccurance;