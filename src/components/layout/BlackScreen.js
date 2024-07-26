import React from "react";

export default function BlackScreen({ charging }) {
  return (
    <div className="h-full rounded-md bg-black flex items-center justify-center">
      {charging && (
        <span className="text-white text-lg">Charging phone...</span>
      )}
    </div>
  );
}
