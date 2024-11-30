"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";

import { routines } from "@/constants";
import Link from "next/link";

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
        <div className="w-full flex flex-col items-center ">
          <Image
            src="/icons/sa-favicon-black.svg"
            alt="logo"
            width={200}
            height={200}
            className="invert"
          />
          <h1 className="mt-5 w-full text-2xl text-center font-bold ">
            DAILY <span className="text-gray-500">ROUTINE</span>
          </h1>
          <div className="mt-48 w-full flex flex-col gap-6">
            <Link
              href="/"
              className="p-2 h-[44px] bg-black/30 text-center inline-flex justify-center items-center hover:bg-[#171717] hover:rounded-2xl border-b"
            >
              CALENDAR
            </Link>
            <Link
              href="/routine"
              className="p-2 h-[44px] bg-black/30 text-center inline-flex justify-center items-center hover:bg-[#171717] hover:rounded-2xl border-b"
            >
              WEEKLY-ROUTINE
            </Link>
            <Link
              href="/notepad"
              className="p-2 h-[44px] bg-black/30 text-center inline-flex justify-center items-center hover:bg-[#171717] hover:rounded-2xl border-b"
            >
              NOTEPAD
            </Link>
          </div>
        </div>
      )}
      {side === "right" && (
        <div className="mt-10">
          <div className=" rounded-md shadow-md align-middle bg-black/30">
            <Calendar
              onChange={(value) => value && setDate(value as Date)}
              value={date}
              className="p-2 rounded-md flex flex-col items-center justify-center"
            />
          </div>
          <h2 className="text-xl mt-4 font-bold text-center border-b">
            UPCOMING <span className="text-gray-500"> EVENTS</span>
          </h2>

          <div className="mt-4 w-full h-auto bg-black/30 overflow-auto no-scrollbar rounded-md">
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

          <h2 className="text-xl mt-4 font-bold text-center border-b">
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
