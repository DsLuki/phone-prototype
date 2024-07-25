import React from "react";
import { Link } from "react-router-dom";

export default function ScreenButton({ toggleScreen }) {
  return (
    <Link to={"/"}>
      <button
        onClick={toggleScreen}
        className="bg-black w-1 h-10 fixed -right-1 top-28 outline-none drop-shadow-md rounded-r-md"
      />
    </Link>
  );
}
