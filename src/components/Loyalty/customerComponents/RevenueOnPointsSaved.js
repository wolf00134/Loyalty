import React from "react";
import { B200, G400, R400, Y200 } from "@atlaskit/theme/colors";
import dayjs from "dayjs";
import CustomerLineGraph from "../GraphComponents/CustomerLineGraph";
import { getDates } from "../../utils/common";

function RevenueOnPointsSaved() {
  const currentDate = dayjs();
  const lastDate = currentDate.subtract(4, 'day');
  const dates = getDates(lastDate, currentDate);

  const data = {
    labels: dates,
    datasets: [
      {
        fill: true,
        label: 'Shop A',
        data: [150000, 130546, 348456, 189405, 120435],
        borderColor: B200,
        backgroundColor: 'rgba(127, 230, 255, 0.3)',
      },
      {
        fill: true,
        label: 'Shop B',
        data: [90568, 123259, 158439, 119670, 90347],
        borderColor: Y200,
        backgroundColor: 'rgba(251, 247, 88, 0.3)',
      },
      {
        fill: true,
        label: 'Shop C',
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
      title='Doanh thu trên từng points tích'
      data={data}
      options={options}
    />
  )
}

export default RevenueOnPointsSaved;