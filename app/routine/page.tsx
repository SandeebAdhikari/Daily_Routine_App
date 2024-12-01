"use client";

import WeeklyRoutineCard from "@/components/WeeklyRoutineCard";
import React, { useRef, useState, useEffect } from "react";
import AddRoutineModal from "@/components/AddRoutineModal";
import { useRoutineContext } from "@/context";
import Image from "next/image";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Routine = () => {
  const { currentRoutines, addRoutine, editRoutine, deleteRoutine } =
    useRoutineContext();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [overflowStatus, setOverflowStatus] = useState<Record<string, boolean>>(
    {}
  );

  const sliderRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const closeAddModal = () => setIsAddModalOpen(false);

  const handleAddRoutine = (routine: {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    weekdays: string;
  }) => {
    addRoutine(routine);
    closeAddModal();
  };

  const slideLeft = (weekday: string) => {
    const slider = sliderRefs.current[weekday];
    if (slider) {
      slider.scrollLeft -= 200;
    }
  };

  const slideRight = (weekday: string) => {
    const slider = sliderRefs.current[weekday];
    if (slider) {
      slider.scrollLeft += 200;
    }
  };

  const checkOverflow = () => {
    const status: Record<string, boolean> = {};
    weekdays.forEach((weekday) => {
      const slider = sliderRefs.current[weekday];
      if (slider) {
        status[weekday] = slider.scrollWidth > slider.clientWidth;
      }
    });
    setOverflowStatus(status);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [currentRoutines]);

  return (
    <div className="relative mt-10 h-[800px] overflow-scroll no-scrollbar">
      {weekdays.map((weekday) => {
        const filteredRoutines = currentRoutines
          .filter((routine) => routine.weekdays === weekday)
          .sort((a, b) => {
            const timeA = new Date(`1970-01-01T${a.startTime}:00`).getTime();
            const timeB = new Date(`1970-01-01T${b.startTime}:00`).getTime();
            return timeA - timeB;
          });

        return (
          <div
            key={weekday}
            className="mb-6 flex flex-col items-center justify-center"
          >
            <h1 className="text-2xl font-bold mb-4 underline">
              {weekday.toUpperCase()}
            </h1>

            <div className="relative flex w-full h-full">
              {overflowStatus[weekday] && (
                <Image
                  src="/icons/chevron-left.svg"
                  alt="left arrow"
                  onClick={() => slideLeft(weekday)}
                  width={40}
                  height={40}
                  className="invert cursor-pointer opacity-30 hover:opacity-100"
                />
              )}
              <div
                ref={(el) => {
                  sliderRefs.current[weekday] = el;
                }}
                className="flex gap-4 p-2 w-full h-full justify-center overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar"
              >
                {!filteredRoutines.length ? (
                  <p>No routines for {weekday}!</p>
                ) : (
                  filteredRoutines.map((routine) => (
                    <WeeklyRoutineCard
                      key={routine.id}
                      routine={routine}
                      onDeleteRoutine={deleteRoutine}
                      onEditRoutine={editRoutine}
                    />
                  ))
                )}
              </div>
              {overflowStatus[weekday] && (
                <Image
                  src="/icons/chevron-right.svg"
                  alt="right arrow"
                  onClick={() => slideRight(weekday)}
                  width={40}
                  height={40}
                  className="invert cursor-pointer opacity-30 hover:opacity-100"
                />
              )}
            </div>
          </div>
        );
      })}

      {isAddModalOpen && (
        <AddRoutineModal
          isOpen={isAddModalOpen}
          onClose={closeAddModal}
          onSave={handleAddRoutine}
        />
      )}
    </div>
  );
};

export default Routine;
