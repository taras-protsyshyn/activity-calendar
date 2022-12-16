import { addDays, differenceInDays, isSameWeek } from "date-fns";

import { Cell } from "./Cell";
import { getUtcDate } from "../../utils/dates";

const generateArrayOfDates = (startDate, stopDate) => {
  const datesArray = [];
  let currentDate = startDate;
  let currentWeek = [];
  const offset = 1;

  while (differenceInDays(currentDate, stopDate) !== offset) {
    currentWeek.push(new Date(currentDate));
    const nextDate = addDays(currentDate, offset);

    if (!isSameWeek(currentDate, nextDate)) {
      datesArray.push(currentWeek);
      currentWeek = [];
    }

    currentDate = addDays(currentDate, offset);
  }

  return datesArray;
};

export const ActivityCalendar = ({ dates, startDate, endDate }) => {
  const allDates = generateArrayOfDates(startDate, endDate);

  const maxActivity = Object.values(dates).reduce(
    (max, current) => (max < current ? current : max),
    0
  );

  const getActivityLevel = (dayDate) => {
    const activities = dates[getUtcDate(dayDate)];

    if (!activities) return 0;

    const level = activities / maxActivity;

    switch (true) {
      case 0 >= level && level < 0.25:
        return 1;
      case 0.25 >= level && level < 0.5:
        return 2;
      case 0.5 >= level && level < 0.75:
        return 3;
      default:
        return 4;
    }
  };

  return (
    <div className="calendar">
      {allDates.map((week) => (
        <div className="calendar--week">
          {week.map((day) => (
            <Cell date={day} activityLevel={getActivityLevel(day)} />
          ))}
        </div>
      ))}
    </div>
  );
};
