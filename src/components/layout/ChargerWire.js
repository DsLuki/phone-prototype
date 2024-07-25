import React from "react";

export default function ChargerWire({ chargePhone, plugIn }) {
  return (
    <div
      className={`w-4 bg-black absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
        plugIn ? "h-80" : "h-8"
      }`}
    >
      <span className="cursor-pointer" onClick={chargePhone}>
        <div className="bg-gray-300 w-8 h-4 absolute left-1/2 -translate-x-1/2 -top-4" />
        <div className="bg-gray-800 w-8 h-6 absolute left-1/2 -translate-x-1/2 rounded-b-md" />
      </span>
    </div>
  );
}
