import React, { useState, useEffect } from "react";

interface Routine {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface AddRoutineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (routine: {
    id: string;
    title: string;
    date: string;
    startTime: string;
    endTime: string;
  }) => void;
  initialRoutineData?: {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
  };
}

const AddRoutineModal: React.FC<AddRoutineModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialRoutineData,
}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (initialRoutineData) {
      setTitle(initialRoutineData.title || "");
      setDate(initialRoutineData.date || "");
      setStartTime(initialRoutineData.startTime || "");
      setEndTime(initialRoutineData.endTime || "");
    } else {
      setTitle("");
      setDate("");
      setStartTime("");
      setEndTime("");
    }
  }, [initialRoutineData]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const newRoutine = {
      id: Date.now().toString(),
      title,
      date,
      startTime,
      endTime,
    };

    onSave(newRoutine);
    onClose();
  };

  return (
    <div>
      <div className="fixed inset-0 bg-[#171717]/85 flex items-center justify-center z-50">
        <div className="bg-black p-6 rounded-lg shadow-lg w-[400px]">
          <h2 className="text-lg font-bold mb-4">
            {initialRoutineData ? "Edit Routine" : "Add Routine"}
          </h2>
          <form onSubmit={handleSave}>
            <div className="mb-4">
              <label htmlFor="event-title" className="block font-semibold mb-2">
                Title
              </label>
              <input
                id="event-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent p-2 border-b rounded outline-none hover:border"
                placeholder="Enter event title"
                required
              />
              <label
                htmlFor="event-date"
                className="mt-2 block font-semibold mb-2"
              >
                Date
              </label>
              <input
                id="event-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent p-2 border-b rounded outline-none hover:border"
                required
              />
              <div className="flex w-full gap-2 mt-2">
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="event-from"
                    className="block font-semibold mb-2"
                  >
                    From
                  </label>
                  <input
                    id="event-from"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full bg-transparent p-2 border-b rounded outline-none hover:border"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="event-to"
                    className="block font-semibold mb-2"
                  >
                    To
                  </label>
                  <input
                    id="event-to"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full bg-transparent p-2 border-b rounded outline-none hover:border"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 border rounded hover:bg-[#171717] hover:scale-105"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#171717] text-white rounded hover:border hover:scale-105"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoutineModal;
