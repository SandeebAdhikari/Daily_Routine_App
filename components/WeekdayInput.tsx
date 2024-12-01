import React, { useState } from "react";

interface WeekdayInputProps {
  setWeekdays: React.Dispatch<React.SetStateAction<string>>;
}

const WeekdayInput: React.FC<WeekdayInputProps> = ({ setWeekdays }) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="mt-2 flex flex-col gap-4">
      <label htmlFor="weekday-select" className="font-bold">
        Weekday
      </label>
      <select
        id="weekday-select"
        defaultValue=""
        onChange={(e) => setWeekdays(e.target.value)}
        className="w-full bg-transparent p-1 border-b rounded outline-none hover:border"
      >
        {weekdays.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WeekdayInput;
