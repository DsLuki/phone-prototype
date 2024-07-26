import React, { useState, useEffect } from "react";

function LockScreen() {
  const [passCode, setPassCode] = useState("11111");
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleUserInput = (value) => {
    if (userInput.length < passCode.length) {
      setUserInput((prev) => prev + value.toString());
    }
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

  useEffect(() => {
    if (userInput.length === passCode.length) {
      checkPass();
    }
  }, [userInput]);

  const Button = ({ value }) => {
    const handleClick = () => {
      handleUserInput(value);
    };

    return (
      <button
        className="rounded-full border-2 text-white p-4 m-2 w-16 h-16 hover:bg-gray-900 transition-all border-purple-500 font-medium text-xl bg-gray-800"
        value={value}
        onClick={handleClick}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div
        className="absolute w-full h-full bg-cover bg-center -z-30 opacity-50"
        style={{ backgroundImage: `url('/img/wallpaper.jpg')` }}
      />
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-white text-center text-6xl mt-4">21:37</h1>
        <input
          className="mt-4 w-48 mx-auto rounded-md outline-none p-2 bg-gray-800 text-center cursor-default text-lg transition-all duration-200 text-purple-700"
          type="password"
          value={userInput}
          readOnly={true}
        />
        <div className="flex flex-row gap-2">
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
        </div>
        <div className="flex flex-row gap-2">
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
        </div>
        <div className="flex flex-row gap-2">
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
        </div>
        <div>
          {isCorrect === false && (
            <div className=" text-white p-2 rounded-md text-xl text-center font-medium transition-all uppercase">
              Nieprawidłowy kod
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LockScreen;
