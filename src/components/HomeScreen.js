import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  function Icon(props) {
    return (
      <div className="grid justify-items-center">
        <Link to={props.path} key={props.title}>
          <img
            className={`rounded-2xl mx-auto p-1.5 drop-shadow-lg ${props.backgroundColor}`}
            width={45}
            src={props.source}
            alt=""
          />
          <h1 className="text-white text-xs text-center font-medium">
            {props.title}
          </h1>
        </Link>
      </div>
    );
  }

  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url('/img/wallpaper.jpg')` }}
    >
      <div
        className="py-4 px-2 grid gap-4 justify-items-center"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        <Icon
          title="Kontakty"
          backgroundColor="bg-orange-700"
          path="/contacts"
          source="/img/contactIcon.svg"
        />
        <Icon
          title="Wiadomości"
          backgroundColor="bg-blue-600"
          path="/messages"
          source="/img/messageIcon.svg"
        />
        <Icon
          title="Kalendarz"
          backgroundColor="bg-green-900"
          path="/calendar"
          source="/img/calendarIcon.svg"
        />
        <Icon
          title="Notatnik"
          backgroundColor="bg-amber-400"
          path="/notes"
          source="/img/notesIcon.svg"
        />
      </div>
    </div>
  );
}
