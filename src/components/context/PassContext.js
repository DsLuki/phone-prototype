import React, { createContext, useState } from "react";

const PassContext = createContext();

const PassProvider = ({ children }) => {
  const [passCode, setPassCode] = useState("11111");
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleUserInput = (value) => {
    setUserInput((prev) => prev + value.toString());
  };

  const checkPass = () => {
    if (userInput.length === passCode.length) {
      if (userInput === passCode) {
        setTimeout(() => {
          setUserInput("");
          setIsCorrect(true);
          localStorage.setItem("Authenticated", true);
          window.location.href = "/home";
        }, 500);
      } else {
        setTimeout(() => {
          setUserInput("");
          setIsCorrect(false);
          localStorage.setItem("Authenticated", false);
          setTimeout(() => {
            setIsCorrect(null);
          }, 700);
        }, 500);
      }
    }
  };

  if (userInput.length === passCode.length) {
    checkPass();
  }

  return (
    <PassContext.Provider
      value={{
        passCode,
        setPassCode,
        userInput,
        setUserInput,
        handleUserInput,
        checkPass,
        isCorrect,
      }}
    >
      {children}
    </PassContext.Provider>
  );
};

export { PassProvider, PassContext };
