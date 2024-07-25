import React from "react";

export default function BlackScreen({ charging }) {
  return (
    <div className="w-80 h-full rounded overflow-hidden bg-black flex items-center justify-center">
      {charging && (
        <span className="text-white text-lg">Charging phone...</span>
      )}
    </div>
  );
}
