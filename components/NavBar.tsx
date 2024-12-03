"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { useEventContext } from "@/context";
import { useRoutineContext } from "@/context";

import CalendarAdd from "@/public/icons/Calendar_Add.svg";
import Schedule from "@/public/icons/schedule.svg";
import IconAdd from "@/public/icons/add_circle.svg";
import NotePad from "@/public/icons/Note.svg";

import AddEventModal from "@/components/AddEventModal";
import AddRoutineModal from "./AddRoutineModal";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalIOpen, setIsModalIOpen] = useState(false);
  const { addEvent } = useEventContext();
  const { addRoutine } = useRoutineContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleCalendarAddClick = () => {
    if (pathname !== "/calendar") {
      router.push("/calendar");
    }
    setIsModalOpen(true);
  };

  const handleRoutineAddClick = () => {
    if (pathname !== "/routine") {
      router.push("/routine");
    }
    setIsModalIOpen(true);
  };

  const handleNoteClick = () => {
    if (pathname !== "/notepad") {
      router.push("/notepad");
    }
  };

  const closeModal = () => setIsModalOpen(false);
  const closeIModal = () => setIsModalIOpen(false);

  const handleSave = (event: any) => {
    addEvent({ ...event });
    setIsModalOpen(false);
  };

  const handleRoutineSave = (routine: any) => {
    addRoutine({ ...routine });
    setIsModalIOpen(false);
  };

  return (
    <div className="ml-auto flex items-center h-[72px] gap-4">
      <Image
        src={CalendarAdd}
        alt="calendar"
        width={40}
        height={40}
        className="cursor-pointer hover:scale-105"
        onClick={handleCalendarAddClick}
      />
      <AddEventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
      />
      <div
        className="relative cursor-pointer hover:scale-105"
        onClick={handleRoutineAddClick}
      >
        <Image src={Schedule} alt="schedule" width={40} height={40} />
        <div className="-top-1 -right-1 absolute bg-black/30">
          <Image src={IconAdd} alt="add" width={18} height={18} />
        </div>
      </div>
      <AddRoutineModal
        isOpen={isModalIOpen}
        onClose={closeIModal}
        onSave={handleRoutineSave}
      />
      <Image
        src={NotePad}
        alt="add"
        width={40}
        height={40}
        className="cursor-pointer hover:scale-105"
        onClick={handleNoteClick}
      />
    </div>
  );
};

export default NavBar;
