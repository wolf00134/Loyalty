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
        data: [452100000, 612800000, 732200000, 962500000, 1082500000],
        borderColor: G400,
        backgroundColor: 'rgba(145, 255, 175, 0.3)',
      },
      {
        fill: true,
        label: 'Company B',
        data: [109500000, 253000000, 379800000, 419500000, 649500000],
        borderColor: Y200,
        backgroundColor: 'rgba(251, 247, 88, 0.3)',
      },
      {
        fill: true,
        label: 'Company C',
        data: [52000000, 70040000, 95000000, 234500000, 433000000],
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