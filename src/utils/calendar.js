import moment from "moment";

export const getWeekRange = (daysBefore = 3, daysAfter = 3, format) => {
  const range = [];

  for (let i = -daysBefore; i <= daysAfter; i++) {
    range.push(
      moment()
        .add(i, "days")
        .format(format || "DD MMM YYYY")
    );
  }

  return range;
};
