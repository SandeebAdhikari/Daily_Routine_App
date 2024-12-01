"use client";

import WeeklyRoutineCard from "@/components/WeeklyRoutineCard";
import React, { useState } from "react";
import AddRoutineModal from "@/components/AddRoutineModal";
import { useRoutineContext } from "@/context";

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
  }) => {
    addRoutine(routine);
    closeAddModal();
  };

  return (
    <div className="relative mt-10 w-full h-full">
      <div className="mt-6 grid grid-cols-1 gap-4">
        {!currentRoutines.length ? (
          <p>NO ROUTINE AVAILABLE ADD ONE!</p>
        ) : (
          currentRoutines.map((routine) => (
            <WeeklyRoutineCard
              key={routine.id}
              routine={routine}
              onDeleteRoutine={deleteRoutine}
              onEditRoutine={editRoutine}
            />
          ))
        )}
      </div>

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
