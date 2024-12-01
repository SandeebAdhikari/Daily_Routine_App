"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEventContext } from "@/context";

export default function Home() {
  const { currentEvents } = useEventContext();

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="rounded-lg overflow-visible w-full h-[800px]">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={currentEvents} // Use events from context
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
