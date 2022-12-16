import { ActivityCalendar } from "./components/ActivityCalendar/ActivityCalendar";
import timestamps from "./data/timestamps.json";

import { groupByDate } from "./utils/dates";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ActivityCalendar
        dates={groupByDate(timestamps)}
        startDate={new Date("2019-01-06 00:00:00 UTC")}
        endDate={new Date("2020-01-03T03:52:39.016Z")}
      />
    </div>
  );
}

export default App;
