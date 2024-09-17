import React, { useEffect, useState } from "react";
import DarkPng from "../assets/dark-mode-button.png";
import LightPng from "../assets/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <div className=" relative">
        <img
          src={DarkPng}
          alt=""
          onClick={changeTheme}
          className={`w-12 absolute cursor-pointer right-0 z-10 custom-shadow transition-all duration-300  ${
            theme !== "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={LightPng}
          alt=""
          onClick={changeTheme}
          className="w-12  custom-shadow transition-all duration-300"
        />
      </div>
    </>
  );
};

export default DarkMode;
