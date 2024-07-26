import React, { useContext } from "react";
import { GlobalSettings } from "./context/GlobalSettings";

export default function Contacts() {
  const { wifi } = useContext(GlobalSettings);

  return (
    <div className="bg-white h-full border-t border-gray-700">
      {wifi ? (
        <div>
          <h1>Przeglądasz internet</h1>
        </div>
      ) : (
        <div>
          <h1>Brak połączenia internetowego</h1>
        </div>
      )}
    </div>
  );
}
