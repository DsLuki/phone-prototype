import React from "react";
import PhoneLayout from "./components/layout/PhoneLayout";
import HomeScreen from "./components/HomeScreen";
import Contacts from "./components/Contacts";
import LockScreen from "./components/LockScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PassProvider } from "./components/context/PassContext";

const App = () => {
  return (
    <PassProvider>
      <BrowserRouter>
        <PhoneLayout>
          <Routes>
            <Route path="/" element={<LockScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </PhoneLayout>
      </BrowserRouter>
    </PassProvider>
  );
};

export default App;
