const { formatData } = require("./format_data");

export const formatDataWeekly = (total, week) => {
  let stateTotalWeekly = {};
  let combined = [];

  let start = 0;

  if (week > 0) {
    start = week * 63;
  }

  let currentWeek = total.slice(start, start + 1)[0].week_of_allocations;
  total.forEach((state) => {
    if (state.week_of_allocations === currentWeek) {
      combined.push(state);
    }
  });

  stateTotalWeekly = formatData(combined);

  return stateTotalWeekly;
};
