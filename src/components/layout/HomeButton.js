import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function HomeButton() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex w-80 py-2 z-10">
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
