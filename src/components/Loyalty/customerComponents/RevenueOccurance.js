import React from "react";
import { G400, R400, Y200 } from "@atlaskit/theme/colors";
import dayjs from "dayjs";
import CustomerLineGraph from "../GraphComponents/CustomerLineGraph";
import { getDates } from "../../utils/common";

function RevenueOccurance() {
  const currentDate = dayjs();
  const lastDate = currentDate.subtract(1, 'week');
  const dates = getDates(lastDate, currentDate);

  const data = {
    labels: dates,
    datasets: [
      {
        fill: true,
        label: 'Company A',
        data: [400000, 334000, 458000, 798020, 800923, 850360, 900569, 834753],
        borderColor: G400,
        backgroundColor: 'rgba(145, 255, 175, 0.3)',
      },
      {
        fill: true,
        label: 'Company B',
        data: [100238, 290485, 309000, 459234, 601948, 689202, 771364, 659284],
        borderColor: Y200,
        backgroundColor: 'rgba(251, 247, 88, 0.3)',
      },
      {
        fill: true,
        label: 'Company C',
        data: [500, 197847, 204693, 396728, 495868, 583745, 672843, 489340],
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
      title='Tỉ lệ phát sinh doanh thu'
      data={data}
      options={options}
    />
  )
}

export default RevenueOccurance;