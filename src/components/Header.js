import React, { useContext, useEffect } from "react";
import "./components.css";
import { IoMdMoon } from "react-icons/io";
import { AppContext } from "./contextFolder";
import { MdSunny } from "react-icons/md";
const Header = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  console.log("Theme =>", theme);
  const toggleThemeController = (theme) => {
    toggleTheme(theme);
  };
  useEffect(() => {
    if (theme == true) {
      document.querySelector("html").setAttribute("theme", "dark");
    } else {
      document.querySelector("html").setAttribute("theme", "light");
    }
  }, [theme]);
  return (
    <div className="header">
      <div className="headerTitle">Blog</div>

      <div className="theme" onClick={() => toggleThemeController(theme)}>
        {theme === false ? <MdSunny /> : <IoMdMoon />}
      </div>
    </div>
  );
};

export default Header;
