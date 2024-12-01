"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Link from "next/link";
import { useEventContext } from "@/context";
import { routines } from "@/constants";

interface SidebarProps {
  side: "left" | "right";
}

const Sidebar: React.FC<SidebarProps> = ({ side }) => {
  const [date, setDate] = useState(new Date());
  const { currentEvents } = useEventContext();

  const weekday = new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase() as keyof typeof routines;
  const currentTime = new Date().toTimeString().slice(0, 5);

  const upcomingRoutines =
    routines[weekday]?.filter((routine) => routine.time > currentTime) || [];

  const upcomingEvents = currentEvents.filter((event) => {
    if (!event.start) {
      console.log("Missing start time for event:", event);
      return false;
    }
    const eventDateTime = new Date(event.start);
    console.log("Event DateTime:", eventDateTime);
    return eventDateTime > new Date();
  });

  console.log("Filtered Upcoming Events:", upcomingEvents);

  console.log("Filtered Upcoming Events:", upcomingEvents);

  return (
    <div className="w-[429px] flex flex-col items-center mx-5">
      {side === "left" && (
        <div className="w-full flex flex-col items-center">
          <Image
            src="/icons/sa-favicon-black.svg"
            alt="logo"
            width={200}
            height={200}
            className="invert"
          />
          <h1 className="mt-5 w-full text-2xl text-center font-bold">
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
          {/* Calendar Component */}
          <div className="rounded-md shadow-md align-middle bg-black/30">
            <Calendar
              onChange={(value) => value && setDate(value as Date)}
              value={date}
              className="p-2 rounded-md flex flex-col items-center justify-center"
            />
          </div>

          <h2 className="text-xl mt-4 font-bold text-center border-b">
            UPCOMING <span className="text-gray-500">EVENTS</span>
          </h2>
          <div className="mt-4 w-full h-auto bg-black/30 overflow-auto no-scrollbar rounded-md">
            {upcomingEvents.length > 0 ? (
              <ul className="p-2 text-sm text-gray-300">
                {upcomingEvents.map((event, index) => (
                  <li
                    key={index}
                    className="flex flex-col p-2 hover:bg-[#171717] hover:rounded-md hover:scale-95 transition-transform ease-in"
                  >
                    <span className="font-semibold">
                      {event.title.toUpperCase()}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {new Date(event.start).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      {" - "}
                      {new Date(event.end).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 text-center">
                No upcoming events.
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
