import dayjs from "dayjs";
import { DEFAULT_FORMAT_DATE } from "./constant";

export const getDates = (startDate, endDate) => {
  let currentDate = dayjs(startDate);
  const toDate = dayjs(endDate);

  const dateArray = [];
  while (toDate.isSameOrAfter(currentDate)) {
    dateArray.push(dayjs(currentDate).format(DEFAULT_FORMAT_DATE));
    currentDate = dayjs(currentDate).add(1, 'days');
  }
  return dateArray;
};

export const getValues = (obj, field) => Object.values(obj).map((c) => c[field]);