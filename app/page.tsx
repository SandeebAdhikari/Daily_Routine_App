"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [
  {
    title: "Team Meeting",
    start: "2024-12-30T10:00:00", // ISO format for December 30, 2024, 10:00 AM
    end: "2024-12-30T11:30:00", // ISO format for December 30, 2024, 11:30 AM
  },
  {
    title: "Lunch Break",
    start: "2024-12-30T13:00:00", // ISO format for December 30, 2024, 1:00 PM
    end: "2024-12-30T14:00:00", // ISO format for December 30, 2024, 2:00 PM
  },
];

export default function Home() {
  const [currentEvents, setCurrentEvents] = useState(events);

  const handleDateClick = (info: any) => {
    const title = prompt("Enter event title:");
    if (title) {
      setCurrentEvents([
        ...currentEvents,
        {
          title,
          start: info.dateStr,
          end: info.dateStr,
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col items-center  min-h-screen mt-10 ">
      <div className="rounded-lg overflow-visible w-full h-full">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={currentEvents}
          dateClick={handleDateClick}
          editable={true}
          selectable={true}
          eventClick={(info) => alert(`Event: ${info.event.title}`)}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="100%"
        />
      </div>
    </div>
  );
}
