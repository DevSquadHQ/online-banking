import React from "react";
import { DatePicker } from "antd";
import Countdown from "react-countdown";

const App = () => {
  return (
    <>
      <div className="text-white bg-gray-800 p-4 rounded-md">
        <Countdown
          date={Date.now() + 6000}
          renderer={({ minutes, seconds }) => {
            return (
              <span>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </span>
            );
          }}
        />

        <DatePicker />
      </div>
    </>
  );
};

export default App;
