import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function HomeButton() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <div className="left-1/2 flex w-full py-2 z-10 bg-gray-900">
          <button className="mx-auto">
            <Link to={"/home"}>
              <img width={40} src="/img/home.svg" alt="" />
            </Link>
          </button>
        </div>
      )}
    </>
  );
}
