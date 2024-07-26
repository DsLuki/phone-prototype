import React, { useContext, useState } from "react";
import { GlobalSettings } from "../context/GlobalSettings";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [expanded, setExpanded] = useState(false);

  const { wifi, setWifi } = useContext(GlobalSettings);

  return (
    <div>
      <div
        onMouseEnter={() => setExpanded(true)}
        className="flex justify-between flex-col w-full py-2 px-1 bg-gray-900 text-sm z-10 text-slate-200 relative"
      >
        <div className="flex flex-row  items-center justify-between w-full px-1">
          <div className="">
            <span className="">21:37</span>
          </div>
          <div className="flex items-center">
            {wifi === true ? (
              <img width={20} src="/img/signalicon.svg" alt="" />
            ) : (
              <img width={20} src="/img/nosignalicon.svg" alt="" />
            )}
            <img width={18} src="/img/battery.svg" alt="" />
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setExpanded(false);
        }}
        className={` w-full absolute flex bg-gray-900 z-10 transition-all duration-300 border-y border-gray-700 drop-shadow-lg ${
          expanded ? "h-20 opacity-100" : "h-0 opacity-0"
        }`}
      >
        {expanded && (
          <div className="max-w-full flex flex-row mx-auto items-center gap-4 px-4 transition-all duration-300">
            <button
              onClick={() => setWifi(!wifi)}
              className={`border-2 w-12 h-12 rounded-full flex items-center justify-center ${
                wifi === true ? "bg-gray-600" : "bg-transparent"
              }`}
            >
              {wifi === true ? (
                <img width={20} src="/img/wifionicon.svg" alt="" />
              ) : (
                <img width={20} src="/img/wifiofficon.svg" alt="" />
              )}
            </button>
            <button className="border-2 w-12 h-12 rounded-full flex items-center justify-center">
              <img className="p-2" src="/img/lightmodeicon.svg" alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
