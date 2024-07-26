import React from "react";
import PhoneLayout from "./components/layout/PhoneLayout";
import HomeScreen from "./components/HomeScreen";
import Contacts from "./components/Contacts";
import Browser from "./components/Browser";
import LockScreen from "./components/LockScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SettingsProvider } from "./components/context/GlobalSettings";
import NewContact from "./components/NewContactForm";

const App = () => {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <PhoneLayout>
          <Routes>
            <Route path="/" element={<LockScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/browser" element={<Browser />} />
            <Route path="/messages" element={<Contacts />} />
            <Route path="/calendar" element={<Contacts />} />
            <Route path="/notes" element={<Contacts />} />
          </Routes>
        </PhoneLayout>
      </BrowserRouter>
    </SettingsProvider>
  );
};

export default App;
