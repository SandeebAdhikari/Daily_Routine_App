import React, { useState } from "react";

const WeekdayInput = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div className="mt-2 flex flex-col gap-4">
      <label htmlFor="weekday-select" className="font-bold">
        Weekday
      </label>
      <select
        id="weekday-select"
        value={selectedDay}
        onChange={handleChange}
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
