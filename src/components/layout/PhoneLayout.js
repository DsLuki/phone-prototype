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

  return (
    <div className="max-w-dvw h-dvh flex items-center justify-center bg-slate-400 overflow-hidden">
      {showWire && <ChargerWire chargePhone={chargePhone} plugIn={plugIn} />}
      <div className="h-1/2 min-w-80 bg-gray-700 px-2 py-2 rounded-md drop-shadow-lg relative">
        <ScreenButton toggleScreen={toggleScreen} />
        <ChargingSocket hidePlug={hidePlug} />
        <Camera />
        {hideScreen ? (
          <BlackScreen charging={charging} />
        ) : (
          <div className="w-80 h-full rounded overflow-hidden relative">
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
