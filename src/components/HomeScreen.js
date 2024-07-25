import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  function Icon(props) {
    return (
      <div className="flex flex-col items-center">
        <Link to={props.path}>
          <img
            className={`rounded-md ${props.bg} mx-auto p-1.5 drop-shadow-lg`}
            width={50}
            src="/img/contactIcon.svg"
            alt=""
          />
          <h1 className=" text-white text-center">{props.title}</h1>
        </Link>
      </div>
    );
  }

  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url('/img/wallpaper.jpg')` }}
    >
      <div className="p-4 flex flex-row flex-wrap gap-2">
        <Icon title="Kontakty" bg="bg-orange-700" path="/contacts" />
      </div>
    </div>
  );
}
