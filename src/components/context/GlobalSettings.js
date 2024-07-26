import React, { createContext, useState } from "react";

const GlobalSettings = createContext();

const SettingsProvider = ({ children }) => {
  const [wifi, setWifi] = useState(false);

  return (
    <GlobalSettings.Provider value={{ wifi, setWifi }}>
      {children}
    </GlobalSettings.Provider>
  );
};

export { SettingsProvider, GlobalSettings };
