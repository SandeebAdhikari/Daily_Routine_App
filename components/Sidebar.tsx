"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";

interface SidebarProps {
  side: "left" | "right";
}

const weekday = new Date().toLocaleDateString("en-US", { weekday: "long" });

const Sidebar: React.FC<SidebarProps> = ({ side }) => {
  const [date, setDate] = useState(new Date());
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
          <div className="p-2 rounded-md shadow-md align-middle">
            <Calendar
              onChange={(value) => value && setDate(value as Date)}
              value={date}
              className="p-2 rounded-md flex flex-col items-center justify-center"
            />
          </div>
          <p className=" mt-4 text-sm text-gray-600">
            Selected Date: {date.toDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
