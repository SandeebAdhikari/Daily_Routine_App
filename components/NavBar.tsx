import Image from "next/image";
import React from "react";

import AddBell from "@/public/icons/Add_Bell_Notification.svg";
import DownArrow from "@/public/icons/Arrow_Down.svg";

const NavBar = () => {
  return (
    <div className="flex items-center h-[72px] rounded-2xl">
      <div className="ml-8  gap-2">
        <Image
          src={AddBell}
          alt="add bell icon"
          width={40}
          height={100}
          className="cursor-pointer rounded-full p-2 hover:scale-110 transition-transform ease-in"
        />
      </div>
    </div>
  );
};

export default NavBar;
