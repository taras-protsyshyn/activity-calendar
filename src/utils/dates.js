export const getUtcDate = (date) => {
  const d = new Date(date);

  return `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`;
};

export const groupByDate = (dates) => {
  return dates.reduce((acc, date) => {
    const utcDate = getUtcDate(date);

    if (acc[utcDate]) {
      acc[utcDate] = acc[utcDate] + 1;

      return acc;
    }

    acc[utcDate] = 1;

    return acc;
  }, {});
};
