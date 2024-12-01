"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

import { useEventContext } from "@/context";
import CalendarAdd from "@/public/icons/Calendar_Add.svg";
import Schedule from "@/public/icons/schedule.svg";
import IconAdd from "@/public/icons/add_circle.svg";
import AddEventModal from "@/components/AddEventModal";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addEvent } = useEventContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleCalendarAddClick = () => {
    if (pathname !== "/") {
      router.push("/");
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSave = (event: any) => {
    addEvent({ ...event });
    setIsModalOpen(false);
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
      <div className="relative cursor-pointer hover:scale-105">
        <Image src={Schedule} alt="schedule" width={40} height={40} />
        <div className="-top-1 -right-1 absolute bg-black/30">
          <Image src={IconAdd} alt="add" width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
