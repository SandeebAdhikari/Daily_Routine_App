import React from "react";

interface WeeklyRoutineCardProps {
  date: string;
  start: string;
}

const WeeklyRoutineCard: React.FC<WeeklyRoutineCardProps> = ({
  date,
  start,
}) => {
  return (
    <div className="w-full p-8 h-[151px] rounded-2xl bg-black/30">
      <div className="flex flex-col">
        <h1 className="text-[18px] font-bold hover:underline">
          Weekly Routine
        </h1>
        <h2 className="text-[16px] ">Monday</h2>
        <p className="mt-1 text-[14px]">{`${date}`}</p>
      </div>
    </div>
  );
};

export default WeeklyRoutineCard;
