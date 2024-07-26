import React, { useState } from "react";
import Topbar from "./Topbar";
import HomeButton from "./HomeButton";
import ScreenButton from "./ScreenButton";
import ChargerWire from "./ChargerWire";
import Camera from "./Camera";
import ChargingSocket from "./ChargingSocket";
import BlackScreen from "./BlackScreen";

const Layout = ({ children }) => {
  const [hideScreen, setHideScreen] = useState(false);
  const [showWire, setShowWire] = useState(false);
  const [plugIn, setPlugIn] = useState(false);
  const [charging, setCharging] = useState(false);
  const toggleScreen = () => {
    setHideScreen(!hideScreen);
  };

  const hidePlug = () => {
    setShowWire(!showWire);
  };

  const chargePhone = () => {
    setCharging(false);
    setPlugIn(!plugIn);
    setTimeout(() => {
      setCharging(!charging);
    }, 1000);
  };

  const toggleWire = () => {
    setShowWire(!showWire);
    setPlugIn(false);
    setCharging(false);
  };

  return (
    <div className="w-dvw h-screen flex items-center justify-center bg-neutral-500">
      {showWire && <ChargerWire chargePhone={chargePhone} plugIn={plugIn} />}
      <div className="h-1/2 w-80 bg-gray-700 p-2 rounded-lg drop-shadow-lg">
        <ScreenButton toggleScreen={toggleScreen} />
        <ChargingSocket toggleWire={toggleWire} />
        <Camera />
        {hideScreen ? (
          <BlackScreen charging={charging} />
        ) : (
          <div className="flex flex-col w-full h-full rounded-md overflow-hidden relative">
            <Topbar />
            {children}
            <HomeButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
