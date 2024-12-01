"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Frequency } from "rrule";

interface Event {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  backgroundColor: string;
  borderColor: string;
  frequency: string;
}

interface EventContextType {
  addEvent: (event: Event) => void;
  currentEvents: Event[];
}

const EventContext = createContext<EventContextType | null>(null);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within EventProvider");
  }
  return context;
};

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setCurrentEvents(JSON.parse(storedEvents));
    }
  }, []);

  const addEvent = (event: Event) => {
    const updatedEvents = [
      ...currentEvents,
      {
        title: event.title,
        date: event.date,
        startTime: event.startTime,
        endTime: event.endTime,
        backgroundColor: event.backgroundColor,
        borderColor: event.borderColor,
        frequency: event.frequency,
      },
    ];
    setCurrentEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <EventContext.Provider value={{ addEvent, currentEvents }}>
      {children}
    </EventContext.Provider>
  );
};
