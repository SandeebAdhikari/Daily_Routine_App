"use client";

import WeeklyRoutineCard from "@/components/WeeklyRoutineCard";
import React, { useState } from "react";
import AddRoutineModal from "@/components/AddRoutineModal";
import { useRoutineContext } from "@/context";

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

  return (
    <div className="relative mt-10 w-full h-full">
      {weekdays.map((weekday) => {
        const filteredRoutines = currentRoutines
          .filter((routine) => routine.weekdays === weekday)
          .sort((a, b) => {
            const timeA = new Date(`1970-01-01T${a.startTime}:00`).getTime();
            const timeB = new Date(`1970-01-01T${b.startTime}:00`).getTime();
            return timeA - timeB;
          });

        return (
          <div key={weekday} className="mb-6">
            <h1 className="text-3xl font-bold mb-4">{weekday.toUpperCase()}</h1>
            <div className="flex gap-4">
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
