import React, { useState } from "react";

export default function Topbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setExpanded(true)}
        className="flex justify-between flex-col w-full py-2 px-1 bg-gray-900 text-sm z-10 text-slate-200 relative"
      >
        <div className="flex flex-row  items-center justify-between w-full">
          <div className="">
            <span className="tracking-wide">21:37</span>
          </div>
          <div className="flex items-center">
            <img width={20} src="/img/signal.svg" alt="" />
            <span className="ml-1">88%</span>
            <img width={18} src="/img/battery.svg" alt="" />
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setExpanded(false);
        }}
        className={` w-full absolute flex bg-gray-900 z-10 transition-all duration-300 border-y border-gray-700 drop-shadow-lg ${
          expanded ? "h-24 opacity-100" : "h-0 opacity-0"
        }`}
      >
        {expanded && (
          <div className="transition-all duration-300">
            <h1 className="text-white">WORK IN PROGRESS</h1>
          </div>
        )}
      </div>
    </>
  );
}
