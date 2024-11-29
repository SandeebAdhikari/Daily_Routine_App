import Image from "next/image";
import React from "react";

interface SidebarProps {
  side: "left" | "right";
}

const Sidebar: React.FC<SidebarProps> = ({ side }) => {
  return (
    <div className="w-[429px] flex flex-col items-center mt-10 mx-5 justify-center border">
      {side === "left" && (
        <div className="flex flex-col p-2">
          <Image
            src="/icons/sa-favicon-black.svg"
            alt="logo"
            width={200}
            height={200}
            className="invert"
          />
        </div>
      )}
      {side === "right" && (
        <div className="flex flex-col p-2">Right Sidebar</div>
      )}
    </div>
  );
};

export default Sidebar;
