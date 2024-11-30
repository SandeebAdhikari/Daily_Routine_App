"use client";
import React, { useState } from "react";

const NotePad: React.FC = () => {
  const [text, setText] = useState("");

  const handleSave = () => {
    alert("Note saved: " + text);
  };

  return (
    <div className="relative w-full h-[825px] bg-black/30 rounded-2xl text-white p-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full h-full resize-none bg-transparent outline-none text-lg p-4"
      />

      <button
        onClick={handleSave}
        className="absolute bottom-4 right-4 bg-[#171717] text-white px-6 py-3 rounded-md shadow-md hover:border"
      >
        Save
      </button>
    </div>
  );
};

export default NotePad;
