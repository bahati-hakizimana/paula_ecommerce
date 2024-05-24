import React from "react";
import { FaStar } from "react-icons/fa";


const themeColors = ["blue", "yellow", "green", "black"];
const ThemeChanger = ({ currentTheme, onChangeTheme }) => {
  return (
    <div className="flex gap-2 mt-2">
      {themeColors.map((color) => (
        <button
          key={color}
          className={`w-6 h-6 rounded-full flex items-center justify-center`}
          onClick={() => onChangeTheme(color)}
          style={{ backgroundColor: color }}
        >
          {currentTheme === color && <span className="text-white text-xs">✔</span>}
        </button>
      ))}
    </div>
  );
};

export default ThemeChanger;
