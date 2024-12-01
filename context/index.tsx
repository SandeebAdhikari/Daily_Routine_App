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
  end: string;
  backgroundColor: string;
  borderColor: string;
  frequency: string;
}

interface EventContextType {
  addEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
  editEvent: (updatedEvent: Event) => void;
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

  const editEvent = (updatedEvent: Event) => {
    const updatedEvents = currentEvents.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setCurrentEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <EventContext.Provider
      value={{ addEvent, deleteEvent, editEvent, currentEvents }}
    >
      {children}
    </EventContext.Provider>
  );
};

export interface Routine {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  weekdays: string;
}

interface RoutineContextType {
  currentRoutines: Routine[];
  addRoutine: (routine: Omit<Routine, "id">) => void;
  deleteRoutine: (id: string) => void;
  editRoutine: (updatedRoutine: Routine) => void;
}

const RoutineContext = createContext<RoutineContextType | null>(null);

export const useRoutineContext = () => {
  const context = useContext(RoutineContext);
  if (!context) {
    throw new Error("useRoutineContext must be used within RoutineProvider");
  }
  return context;
};

interface RoutineProviderProps {
  children: ReactNode;
}

export const RoutineProvider = ({ children }: RoutineProviderProps) => {
  const [currentRoutines, setCurrentRoutines] = useState<Routine[]>([]);

  useEffect(() => {
    const storedRoutines = localStorage.getItem("routines");
    if (storedRoutines) {
      setCurrentRoutines(JSON.parse(storedRoutines));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(currentRoutines));
  }, [currentRoutines]);

  const addRoutine = (routine: Omit<Routine, "id">) => {
    const id = new Date().getTime().toString();
    const newRoutine = { ...routine, id };
    setCurrentRoutines((prevRoutines) => [...prevRoutines, newRoutine]);
  };

  const deleteRoutine = (id: string) => {
    setCurrentRoutines((prevRoutines) =>
      prevRoutines.filter((routine) => routine.id !== id)
    );
  };

  const editRoutine = (updatedRoutine: Routine) => {
    setCurrentRoutines((prevRoutines) =>
      prevRoutines.map((routine) =>
        routine.id === updatedRoutine.id ? updatedRoutine : routine
      )
    );
  };

  return (
    <RoutineContext.Provider
      value={{ currentRoutines, addRoutine, deleteRoutine, editRoutine }}
    >
      {children}
    </RoutineContext.Provider>
  );
};

export default RoutineProvider;
