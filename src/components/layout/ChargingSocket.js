import React from "react";

export default function ChargingSocket({ hidePlug }) {
  return (
    <div
      onClick={hidePlug}
      className="bg-black w-2 px-6 h-1 fixed -bottom-1 left-1/2 -translate-x-1/2 rounded-b-sm  cursor-pointer"
    />
  );
}
