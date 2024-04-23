import React from "react";
import { G200, Y200 } from "@atlaskit/theme/colors";
import { getValues } from "../../utils/common";
import { MEMBERS, SHOPS } from "../../utils/constant";
import CustomerRankGraph from "../GraphComponents/CustomerRankGraph";

function MembersAndCctvSpend() {
  const title = 'Số lượng Member tích và tiêu điểm thưởng theo CTTV';

  const shopList = {
    shop_a: {
      label: SHOPS.SHOP_A.name,
      saved: {
        label: MEMBERS.MEMBER_SAVED.name,
        data: 596824,
        borderColor: G200,
        backgroundColor: G200,
      },
      spent: {
        label: MEMBERS.MEMBER_SPEND.name,
        data: 1000000,
        borderColor: Y200,
        backgroundColor: Y200,
      },
    },
    shop_b: {
      label: SHOPS.SHOP_B.name,
      saved: {
        label: MEMBERS.MEMBER_SAVED.name,
        data: 401928,
        borderColor: G200,
        backgroundColor: G200,
      },
      spent: {
        label: MEMBERS.MEMBER_SPEND.name,
        data: 803847,
        borderColor: Y200,
        backgroundColor: Y200,
      },
    },
    shop_c: {
      label: SHOPS.SHOP_C.name,
      saved: {
        label: MEMBERS.MEMBER_SAVED.name,
        data: 196832,
        borderColor: G200,
        backgroundColor: G200,
      },
      spent: {
        label: MEMBERS.MEMBER_SPEND.name,
        data: 387943,
        borderColor: Y200,
        backgroundColor: Y200,
      },
    },
  };

  const pointsSaved = getValues(shopList, 'saved');
  const pointsSpent = getValues(shopList, 'spent');

  const savedName = getValues(pointsSaved, 'label');
  const spentName = getValues(pointsSpent, 'label');

  const data = {
    labels: getValues(shopList, 'label'),
    datasets: [
      {
        label: savedName[0],
        data: getValues(pointsSaved, 'data'),
        backgroundColor: getValues(pointsSaved, 'backgroundColor'),
        borderColor: getValues(pointsSaved, 'borderColor'),
        borderWidth: 1,
      },
      {
        label: spentName[0],
        data: getValues(pointsSpent, 'data'),
        backgroundColor: getValues(pointsSpent, 'backgroundColor'),
        borderColor: getValues(pointsSpent, 'borderColor'),
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  };

  return (
    <CustomerRankGraph title={title} data={data} options={options}/>
  )
}

export default MembersAndCctvSpend;