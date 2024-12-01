"use client";
import React, { useState } from "react";

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: any) => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [start, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [frequency, setFrequency] = useState("once");
  const [color, setColor] = useState("#3174ad");

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (start >= endTime) {
      alert("End time must be after start time.");
      return;
    }

    const newEvent = {
      title,
      backgroundColor: color,
    };

    if (frequency === "once") {
      onSave({
        ...newEvent,
        start: `${date}T${start}`,
        end: `${date}T${endTime}`,
      });
    } else {
      const durationHours =
        parseInt(endTime.split(":")[0]) - parseInt(start.split(":")[0]);
      const durationMinutes =
        parseInt(endTime.split(":")[1]) - parseInt(start.split(":")[1]);
      const duration = `PT${durationHours}H${durationMinutes}M`;

      onSave({
        ...newEvent,
        rrule: {
          freq: frequency.toUpperCase(),
          dtstart: `${date}T${start}`,
          until: `${date}T23:59:59`,
        },
        duration,
      });
    }

    setTitle("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setFrequency("once");
    setColor("#3174ad");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#171717]/85 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-lg font-bold mb-4">Add Event</h2>
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
                  value={start}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full bg-transparent p-2 border-b rounded outline-none hover:border"
                  required
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="event-to" className="block font-semibold mb-2">
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
            <label
              htmlFor="event-frequency"
              className="mt-2 block font-semibold mb-2"
            >
              Frequency
            </label>
            <select
              id="event-frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full bg-transparent p-2 border-b rounded outline-none hover:border"
            >
              <option value="once">Once</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <label
              htmlFor="event-color"
              className="mt-2 block font-semibold mb-2"
            >
              Background Color
            </label>
            <input
              id="event-color"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="p-2 border bg-transparent cursor-pointer rounded-full"
            />
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
  );
};

export default AddEventModal;
