// 0	#ebedf0
// > 0% of max	#c6e48b
// > 25% of max	#7bc96f
// > 50% of max	#239a3b
// > 75% of max	#196127

const ACTIVITY_LEVELS = {
  0: "#ebedf0",
  1: "#c6e48b",
  2: "#7bc96f",
  3: "#239a3b",
  4: "#196127",
};

export const Cell = ({ date, activityLevel, count }) => {
  const bg = ACTIVITY_LEVELS[activityLevel];

  return <div title={date} style={{ backgroundColor: bg }} className="calendar--cell"></div>;
};
