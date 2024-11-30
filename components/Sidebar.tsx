"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";

import { routines } from "@/constants";

interface SidebarProps {
  side: "left" | "right";
}

const events = [
  {
    title: "Meeting",
    start: new Date(2024, 10, 30, 14, 0), // Example date and time
    end: new Date(2024, 10, 30, 15, 0),
  },
  {
    title: "Doctor Appointment",
    start: new Date(2024, 10, 30, 16, 0),
    end: new Date(2024, 10, 30, 16, 30),
  },
];

const Sidebar: React.FC<SidebarProps> = ({ side }) => {
  const [date, setDate] = useState(new Date());
  const weekday = new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase() as keyof typeof routines;
  const currentTime = new Date().toTimeString().slice(0, 5);

  const upcomingRoutines =
    routines[weekday]?.filter((routine) => routine.time > currentTime) || [];

  const upcomingEvents = events.filter(
    (event) =>
      event.start > new Date() &&
      event.start.toDateString() === date.toDateString()
  );

  return (
    <div className="w-[429px] flex flex-col items-center mx-5">
      {side === "left" && (
        <>
          <Image
            src="/icons/sa-favicon-black.svg"
            alt="logo"
            width={200}
            height={200}
            className="invert"
          />
          <h1 className="-mt-5 text-2xl text-center font-bold">
            DAILY <span className="text-gray-500">ROUTINE</span>
          </h1>
          <div className=" flex flex-col ">
            <button className="w-[158px] h-[144px]">CALENDAR</button>
            <button className="w-[158px] h-[144px]">TO-DO LIST</button>
            <button className="w-[158px] h-[144px]">NOTEPAD</button>
          </div>
        </>
      )}
      {side === "right" && (
        <div className="mt-10 flex flex-col p-2 items-center">
          <div className=" rounded-md shadow-md align-middle bg-black/30">
            <Calendar
              onChange={(value) => value && setDate(value as Date)}
              value={date}
              className="p-2 rounded-md flex flex-col items-center justify-center"
            />
          </div>
          <h2 className="text-xl mt-4 font-bold text-center">
            UPCOMING <span className="text-gray-500"> EVENTS</span>
          </h2>

          <div className="mt-4 w-full h-auto bg-black/30 overflow-auto no-scrollbar rounded-md">
            <h3 className="text-lg font-bold text-gray-400 mb-2 text-center"></h3>
            {upcomingEvents.length > 0 ? (
              <ul className="p-2 text-sm text-gray-300">
                {upcomingEvents.map((event, index) => (
                  <li
                    key={index}
                    className="flex flex-col p-2 hover:bg-[#171717] hover:rounded-md hover:scale-95 transition-transform ease-in"
                  >
                    <span className="font-semibold">{event.title}</span>
                    <span className="text-gray-400 text-xs">
                      {event.start.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      -{" "}
                      {event.end.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 text-center">
                No events for today.
              </p>
            )}
          </div>

          <h2 className="text-xl mt-4 font-bold text-center">
            {weekday.toUpperCase()}
            <span className="text-gray-500"> ROUTINE</span>
          </h2>
          <div className="mt-4 w-full h-auto bg-black/30 overflow-auto no-scrollbar rounded-md">
            {upcomingRoutines.length > 0 ? (
              <ul className="p-1 text-sm text-gray-300">
                {upcomingRoutines.map((routine, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-1 hover:bg-[#171717] hover:rounded-md hover:scale-95 transition-transform ease-in"
                  >
                    <span>{routine.time}</span>
                    <span>{routine.activity}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 text-center mt-4 no-underline">
                No more routines for today.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
