"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEventContext } from "@/context";

interface CalendarEvent extends Event {
  id: string;
}

export default function Home() {
  const { currentEvents, deleteEvent } = useEventContext();

  const handleEventClick = (info: any) => {
    const shouldDelete = confirm(
      `Do you want to delete the event: ${info.event.title}?`
    );
    if (shouldDelete) {
      deleteEvent(info.event.id);
    }
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
    </div>
  );
}
