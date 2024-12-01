import AddEventModal from "@/components/AddEventModal";
import React from "react";

const page = () => {
  return (
    <div className="relative mt-10 w-full h-full ">
      <div className="bg-black/30 inset-0 absolute rounded-2xl">
        <AddEventModal />
      </div>
    </div>
  );
};

export default page;
