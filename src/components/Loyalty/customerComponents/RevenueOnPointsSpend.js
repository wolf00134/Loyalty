import React from "react";
import { B200, G400, R400, Y200 } from "@atlaskit/theme/colors";
import dayjs from "dayjs";
import CustomerLineGraph from "../GraphComponents/CustomerLineGraph";
import { getDates } from "../../utils/common";

function RevenueOnPointsSpend() {
  const currentDate = dayjs();
  const lastDate = currentDate.subtract(4, 'day');
  const dates = getDates(lastDate, currentDate);

  const data = {
    labels: dates,
    datasets: [
      {
        fill: true,
        label: 'Company A',
        data: [150486, 132546, 783921, 189405, 190435],
        borderColor: B200,
        backgroundColor: 'rgba(127, 230, 255, 0.3)',
      },
      {
        fill: true,
        label: 'Company B',
        data: [105468, 134559, 184939, 269670, 103922],
        borderColor: Y200,
        backgroundColor: 'rgba(251, 247, 88, 0.3)',
      },
      {
        fill: true,
        label: 'Company C',
        data: [70827, 90348, 100022, 89582, 60792],
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
      title='Doanh thu trên từng points tiêu'
      data={data}
      options={options}
    />
  )
}

export default RevenueOnPointsSpend;