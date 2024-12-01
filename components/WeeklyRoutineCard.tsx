"use client";

import React, { useState } from "react";
import AddRoutineModal from "@/components/AddRoutineModal";

interface Routine {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface WeeklyRoutineCardProps {
  routine: Routine;
  onDeleteRoutine: (id: string) => void;
  onEditRoutine: (updatedRoutine: Routine) => void;
}

const WeeklyRoutineCard: React.FC<WeeklyRoutineCardProps> = ({
  routine,
  onDeleteRoutine,
  onEditRoutine,
}) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openViewModal = () => setIsViewModalOpen(true);
  const closeViewModal = () => setIsViewModalOpen(false);

  const openEditModal = () => {
    closeViewModal();
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => setIsEditModalOpen(false);

  const handleSave = (updatedRoutine: Routine) => {
    onEditRoutine({ ...updatedRoutine, id: routine.id });
    closeEditModal();
  };

  const handleDelete = () => {
    onDeleteRoutine(routine.id);
    closeViewModal();
  };

  return (
    <>
      {/* Weekly Routine Card */}
      <div
        className="w-full p-8 h-[151px] rounded-2xl bg-black/30 cursor-pointer hover:bg-black/40 transition-all"
        onClick={openViewModal}
      >
        <div className="flex flex-col">
          <h1 className="text-[18px] font-bold hover:underline">
            {routine.title}
          </h1>
          <h2 className="text-[16px]">{routine.date}</h2>
          <p className="mt-1 text-[14px]">
            {routine.startTime} - {routine.endTime}
          </p>
        </div>
      </div>

      {/* View Routine Modal */}
      {isViewModalOpen && (
        <div className="fixed inset-0 bg-[#171717]/85 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-[400px] relative">
            <button
              onClick={closeViewModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-white hover:bg-[#171717] p-2 rounded-full transition-all"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex flex-col items-start">
              <h2 className="text-lg font-bold mb-4">{routine.title}</h2>
              <p>
                <strong>Start:</strong> {routine.date} {routine.startTime}
                <br />
                <strong>End:</strong> {routine.date} {routine.endTime}
              </p>
            </div>

            <div className="mt-4 flex w-full justify-between">
              <button
                onClick={openEditModal}
                className="mr-2 px-4 py-2 hover:border hover:bg-black/30 text-white rounded bg-[#171717]"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="mr-2 px-4 py-2 border rounded hover:bg-[#171717] hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <AddRoutineModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onSave={handleSave}
          initialEventData={routine}
        />
      )}
    </>
  );
};

export default WeeklyRoutineCard;
