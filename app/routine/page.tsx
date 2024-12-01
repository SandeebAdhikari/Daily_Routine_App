"use client";

import WeeklyRoutineCard from "@/components/WeeklyRoutineCard";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toISOString());
  }, []);

  if (!currentDate) {
    return null;
  }

  return (
    <div className="relative mt-10 w-full h-full">
      <WeeklyRoutineCard date={currentDate} start="08:00 AM" />
    </div>
  );
};

export default Page;
