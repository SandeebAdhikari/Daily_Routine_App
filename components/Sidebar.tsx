"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Link from "next/link";
import { useEventContext, useRoutineContext } from "@/context";
import { usePathname } from "next/navigation";

interface SidebarProps {
  side: "left" | "right";
}

const Sidebar: React.FC<SidebarProps> = ({ side }) => {
  const [date, setDate] = useState(new Date());
  const { currentEvents } = useEventContext();
  const { currentRoutines } = useRoutineContext();
  const pathname = usePathname();

  const weekday = new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();

  const currentTime = new Date().toTimeString().slice(0, 5);

  const todayRoutines = currentRoutines.filter(
    (routine) => routine.weekdays.toUpperCase() === weekday
  );

  const upcomingRoutines = todayRoutines
    .filter((routine) => routine.startTime > currentTime)
    .sort((a, b) => {
      const timeA = new Date(`1970-01-01T${a.startTime}`).getTime();
      const timeB = new Date(`1970-01-01T${b.startTime}`).getTime();
      return timeA - timeB;
    });

  const upcomingEvents = currentEvents.filter((event) => {
    if (!event.start) {
      return false;
    }
    const eventDateTime = new Date(event.start);
    return eventDateTime > new Date();
  });

  return (
    <div className="w-[429px] min-h-screen flex flex-col items-center mx-5">
      {side === "left" && (
        <div className="mt-10 w-full h-full flex flex-col items-center justify-between   ">
          <div className="relative w-full flex items-center justify-center">
            <Link href={"/signIn"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100px"
                height="100px"
              >
                <g transform="translate(26, 28) scale([0.5, 0.5,0.5, 0.5])">
                  <circle style={{ fill: "#ffffff" }} cx="50" cy="50" r="48" />
                  <circle style={{ fill: "#000000" }} cx="50" cy="50" r="44" />
                  <circle
                    style={{
                      strokeWidth: "4pt",
                      stroke: "#222222",
                      fill: "none",
                    }}
                    cx="50"
                    cy="50"
                    r="42"
                  />
                  <g style={{ fill: "#ffffff" }}>
                    <circle cx="50" cy="9" r="3" />
                    <circle cx="91" cy="50" r="3" />
                    <circle cx="50" cy="91" r="3" />
                    <circle cx="9" cy="50" r="3" />
                  </g>
                  <path
                    style={{ stroke: "#ffffff", strokeWidth: 5, fill: "none" }}
                    d="M 50 50 45 24"
                  />
                  <path
                    style={{ stroke: "#ffffff", strokeWidth: 4, fill: "none" }}
                    d="M 50 50 28 73"
                  />
                  <circle style={{ fill: "#ffffff" }} cx="50" cy="50" r="4.5" />
                </g>
              </svg>
            </Link>
            <h1 className="absolute top-12 text-[32px] text-white ml-4 font-bold text-stroke">
              DAILY <span className="text-[#aaaaaa] font-bold">ROUTINE</span>
            </h1>
          </div>

          <div className=" w-full flex flex-col gap-6">
            <Link
              href="/calendar"
              className={`p-2 h-[44px]  text-center inline-flex gap-2 justify-center items-center  ${
                pathname === "/calendar"
                  ? "rounded-2xl bg-[#171717]"
                  : "hover:rounded-2xl hover:bg-[#171717] bg-black/30"
              } border-b`}
            >
              <Image
                src="/icons/Calendar.svg"
                alt="calendar"
                width={20}
                height={20}
              />
              CALENDAR
            </Link>
            <Link
              href="/routine"
              className={`p-2 h-[44px] text-center inline-flex gap-2 justify-center items-center ${
                pathname === "/routine"
                  ? "rounded-2xl bg-[#171717]"
                  : "hover:rounded-2xl hover:bg-[#171717] bg-black/30"
              } border-b`}
            >
              <Image
                src="/icons/Schedule.svg"
                alt="schedule"
                width={20}
                height={20}
              />
              WEEKLY-ROUTINE
            </Link>
            <Link
              href="/notepad"
              className={`p-2 h-[44px]  text-center inline-flex gap-2 justify-center items-center  ${
                pathname === "/notepad"
                  ? "rounded-2xl bg-[#171717]"
                  : "hover:rounded-2xl hover:bg-[#171717] bg-black/30"
              } border-b`}
            >
              <Image
                src="/icons/Note.svg"
                alt="notepad"
                width={20}
                height={20}
              />
              NOTEPAD
            </Link>
          </div>
          <div className="w-full items-center justify-center">
            <Link
              href="/signIn"
              className={`w-full p-2 h-[44px]  text-center inline-flex gap-2 justify-center items-center ${
                pathname === "/signIN"
                  ? "rounded-2xl bg-[#171717]"
                  : "hover:rounded-2xl hover:bg-[#171717] bg-black/30"
              } mb-4 border-b`}
            >
              Log Out
            </Link>
          </div>
        </div>
      )}

      {side === "right" && (
        <div className="mt-10">
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
                    <span>
                      {new Date(event.start).toLocaleDateString([], {
                        dateStyle: "long",
                      })}
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
            {weekday} <span className="text-gray-500">ROUTINE</span>
          </h2>
          <div className="mt-4 w-full h-auto bg-black/30 overflow-auto no-scrollbar rounded-md">
            {upcomingRoutines.length > 0 ? (
              <ul className="p-1 text-sm text-gray-300">
                {upcomingRoutines.map((routine, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-1 hover:bg-[#171717] hover:rounded-md hover:scale-95 transition-transform ease-in"
                  >
                    <span>{routine.startTime}</span>
                    <span>{routine.title}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 text-center mt-4 no-underline">
                No more routines for today.
              </p>
            )}
          </div>
          <h2 className="text-xl mt-4 font-bold text-center border-b">
            NOTEPAD <span className="text-gray-500">FILES</span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
