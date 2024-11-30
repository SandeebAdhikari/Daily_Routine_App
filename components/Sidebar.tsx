"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";

import { routines } from "@/constants";

interface SidebarProps {
  side: "left" | "right";
}

const Sidebar: React.FC<SidebarProps> = ({ side }) => {
  const [date, setDate] = useState(new Date());
  const weekday = new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase() as keyof typeof routines;
  const currentTime = new Date().toTimeString().slice(0, 5);

  const upcomingRoutines =
    routines[weekday]?.filter((routine) => routine.time > currentTime) || [];

  return (
    <div className="w-[429px] flex flex-col items-center mt-10 mx-5 border">
      {side === "left" && (
        <div className="flex flex-col">
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
        </div>
      )}
      {side === "right" && (
        <div className="flex flex-col p-2 items-center">
          <div className="mt-10 rounded-md shadow-md align-middle">
            <Calendar
              onChange={(value) => value && setDate(value as Date)}
              value={date}
              className="p-2 rounded-md flex flex-col items-center justify-center"
            />
          </div>

          <h2 className="text-xl mt-4 font-bold text-center">
            {weekday.toUpperCase()}
            <span className="text-gray-500"> ROUTINE</span>
          </h2>
          <div className="mt-4 w-full h-[118px] bg-[#171717] overflow-auto no-scrollbar  rounded-md">
            {upcomingRoutines.length > 0 ? (
              <ul className="p-1 text-sm text-gray-300">
                {upcomingRoutines.map((routine, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-1 hover:bg-gray-500 hover:rounded-md hover:scale-95 transition-transform ease-in"
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
