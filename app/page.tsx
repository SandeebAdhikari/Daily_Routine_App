"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEventContext } from "@/context";
import AddEventModal from "@/components/AddEventModal";

export default function Home() {
  const { currentEvents, deleteEvent, addEvent } = useEventContext();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEventClick = (info: any) => {
    console.log("Event Info:", info.event);

    const startDate = new Date(info.event.start);
    const endDate = new Date(info.event.end);

    setSelectedEvent({
      id: info.event.id,
      title: info.event.title,
      date: startDate.toISOString().split("T")[0],
      start: startDate.toTimeString().slice(0, 5),
      end: endDate.toTimeString().slice(0, 5),
      backgroundColor: info.event.backgroundColor,
      borderColor: info.event.borderColor,
      frequency: info.event.extendedProps.frequency || "once",
    });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEvent(null);
  };

  const handleSave = (updatedEvent: any) => {
    deleteEvent(selectedEvent.id);
    addEvent(updatedEvent);
    closeEditModal();
  };

  const handleDelete = () => {
    deleteEvent(selectedEvent.id);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="rounded-lg overflow-visible w-full h-[800px]">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={currentEvents}
          editable={true}
          selectable={true}
          eventClick={handleEventClick}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="100%"
        />
      </div>

      {selectedEvent && !isEditModalOpen && (
        <div className="fixed inset-0 bg-[#171717]/85 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg w-[400px] relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-white hover:bg-[#171717] p-2 rounded-full transition-all"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex flex-col items-start">
              <h2 className="text-lg font-bold mb-4">{selectedEvent.title}</h2>
              <p>
                Start:{" "}
                {new Date(
                  `${selectedEvent.date}T${selectedEvent.start}`
                ).toLocaleString()}
                <br />
                End:{" "}
                {new Date(
                  `${selectedEvent.date}T${selectedEvent.end}`
                ).toLocaleString()}
              </p>
            </div>

            <div className="mt-4 flex w-full justify-between">
              <button
                onClick={handleEdit}
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
        <AddEventModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onSave={handleSave}
          initialEventData={selectedEvent}
        />
      )}
    </div>
  );
}
