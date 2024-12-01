"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  start: string;
  endTime: string;
  backgroundColor: string;
  borderColor: string;
  frequency: string;
}

interface EventContextType {
  addEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
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
    const id = new Date().getTime().toString();
    const updatedEvents = [
      ...currentEvents,
      {
        ...event,
        id,
      },
    ];
    setCurrentEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const deleteEvent = (id: string) => {
    const updatedEvents = currentEvents.filter((event) => event.id !== id);
    setCurrentEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <EventContext.Provider value={{ addEvent, deleteEvent, currentEvents }}>
      {children}
    </EventContext.Provider>
  );
};
